//init
console.log('init');

var inputIdsDefaultValues = {
  innerFrequency: { inputId: "innerFrequency", default: "18.118" },
  outerFrequency: { inputId: "outerFrequency", default: "14.055" },
  dipoleLength: { inputId: "dipoleLength", default: "10.17" },
  coilFeedpointDistance: { inputId: "coilFeedpointDistance", default: "0.7758" },
  shortenAmount: { inputId: "shortenAmount", default: "0.02" },
  wireDiameter: { inputId: "wireDiameter", default: "1.628" },
  electricalHeight: { inputId: "electricalHeight", default: "6" },
  reactanceLoad: { inputId: "reactanceLoad", default: "" },
  coilInductance: { inputId: "coilInductance", default: "" },
}

//provide function to wait for math lib to load
const delay = ms => new Promise(res => setTimeout(res, ms));
(async function waitForMaths() {
  for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    await delay(i * i * 100)
    if (typeof math !== "undefined" && typeof MathJax !== "undefined" ) {
      calcDipoleLength()
      updateDipoleLength()
      return true
    }
  }
  return true
})()

//setup input elements; typing enter in any box will run calculator
var inputElements = Object.entries(inputIdsDefaultValues)
  .reduce((acc, entry) =>{
    var key = entry[0]
    var inputId = entry[1].inputId
    var defaultValue = entry[1].default
	  var element = document.getElementById(inputId);
    element.value = defaultValue
    
    //register enter key calculation
    element.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("calculate").click();
        calcDipoleLength()
      }
    });
    
    return {...acc, [key]: {
        inputId: inputId,
        elem: element,
        defaultValue: defaultValue
    }}
  }, {})

//configure innerjrequency -> dipoleLength calc; triggered by tab
// inputElements.outerFrequency.elem.addEventListener("focusout", function(event){
// 	var outerFrequency = inputElements.outerFrequency.elem.value
//   var dipoleLength =  math.round(143 / outerFrequency, 2)
//   inputElements.dipoleLength.elem.value = math.round(143 / outerFrequency, 2)
//   document.getElementById("dipoleLengthSpan").textContent =  `\\(L_{coil} = \\) ${dipoleLength.toString()}μH`
// })
inputElements.outerFrequency.elem.addEventListener("focusout", updateDipoleLength)

console.log('fin')

//calculate dipole length before calculating
async function updateDipoleLength(event) {
  var outerFrequency = inputElements.outerFrequency.elem.value
  var dipoleLength = math.round(143 / outerFrequency, 2)
  inputElements.dipoleLength.elem.value = dipoleLength
  document.getElementById("dipoleLengthSpan").textContent = `\\(L_{coil} = \\) ${dipoleLength.toString()}m`
  MathJax.typeset()
}

//on frequency update, change dipole length
async function calcDipoleLength() {
  var outerFrequency = math.bignumber(inputElements.outerFrequency.elem.value)
  var coilFeedpointDistance = math.bignumber(inputElements.coilFeedpointDistance.elem.value)
  var shortenAmount = math.bignumber(inputElements.shortenAmount.elem.value)
  var wireDiameter = math.bignumber(inputElements.wireDiameter.elem.value)
  var electricalHeight = math.bignumber(inputElements.electricalHeight.elem.value)
  
  var betaOne = math.evaluate(`90 - 90 * (${shortenAmount} + ${coilFeedpointDistance})`)
  var betaTwo = math.evaluate(`90 - 90 * ${coilFeedpointDistance}`)
  var impedanceZero = math.evaluate(`138 * log10(4*${electricalHeight} / (${wireDiameter} / ${1000}))`)
  var reactanceOne = math.evaluate(`-1 * ${impedanceZero} * cot(${betaOne} deg)`)
  var reactanceTwo = math.evaluate(`-1 * ${impedanceZero} * cot(${betaTwo} deg)`)
  var reactanceLoad = math.round(math.evaluate(`${reactanceTwo} - ${reactanceOne}`),0)
  var coilInductance = math.round(math.evaluate(`${reactanceLoad} / (2 * pi * ${outerFrequency})`),2)
  
  console.log(`betaOne ${betaOne}`)
  console.log(`betaTwo ${betaTwo}`)
  console.log(`impedanceZero ${impedanceZero}`)
  console.log(`reactanceOne ${reactanceOne}`)
  console.log(`reactanceTwo ${reactanceTwo}`)
  console.log(`reactanceLoad ${reactanceLoad}`)
  console.log(`coilInductance ${coilInductance}`)
  
  inputElements.reactanceLoad.elem.value = `${reactanceLoad.toString()}Ω`
  document.getElementById("reactanceLoadSpan").textContent = `\\(X_L = \\) ${reactanceLoad.toString()}Ω`
  inputElements.coilInductance.elem.value = `${coilInductance.toString()}μH`
  document.getElementById("coilInductanceSpan").textContent = `\\(L_{coil} = \\) ${coilInductance.toString()}μH`
  
  MathJax.typeset()
}