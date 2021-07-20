//init
console.log('init');

var inputIdsDefaultValues = {
  innerFrequency: { inputId: "innerFrequency", default: "28.090" },
  outerFrequency: { inputId: "outerFrequency", default: "14.055" },
  dipoleLength: { inputId: "dipoleLength", default: "10.17" },
  coilFeedpointDistance: { inputId: "coilFeedpointDistance", default: "0.5" },
  shortenAmount: { inputId: "shortenAmount", default: "0.2" },
  wireDiameter: { inputId: "wireDiameter", default: "1.628" },
  electricalHeight: { inputId: "electricalHeight", default: "6" },
  loadReactance: { inputId: "loadReactance", default: "" },
  trapInductance: { inputId: "trapInductance", default: "" },
  trapCapacitance: { inputId: "trapCapacitance", default: "" },
}

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
        event.stopImmediatePropagation();
        //document.getElementById("calculate").click();
        calcDipoleLength(event)
      }
    });
    
    return {...acc, [key]: {
        inputId: inputId,
        elem: element,
        defaultValue: defaultValue
    }}
  }, {})

inputElements.innerFrequency.elem.addEventListener("focusout", updateRequiredFields)
inputElements.outerFrequency.elem.addEventListener("focusout", updateRequiredFields)
inputElements.shortenAmount.elem.addEventListener("focusout", updateShortenedDipole)

//wait for math lib to load
const delay = ms => new Promise(res => setTimeout(res, ms));
(async function waitForMaths() {
  for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    await delay(i * i * 100)
    if (typeof math !== "undefined" && typeof MathJax !== "undefined" ) {
      calcDipoleLength()
      updateRequiredFields()
	    updateShortenedDipole()
      return true
    }
  }
  return true
})()

console.log('fin')

async function updateRequiredFields() {
  var outerFrequency = inputElements.outerFrequency.elem.value
  var innerFrequency = inputElements.innerFrequency.elem.value
  //calculate dipole length before calculating
  var dipoleLength = math.round(math.evaluate(`143 / ${outerFrequency}`),2)
  inputElements.dipoleLength.elem.value = dipoleLength
  document.getElementById("dipoleLengthSpan").textContent = `\\(l_{full} = \\) ${dipoleLength.toString()}m`
	
  //calculate coil distance
  var coilFeedpointDistance = math.round(math.evaluate(`${outerFrequency} / ${innerFrequency}`),4)
  inputElements.coilFeedpointDistance.elem.value = coilFeedpointDistance
  var coilFeedpointDistanceDisplay = math.round(math.evaluate(`${coilFeedpointDistance} * ${dipoleLength} / 2`),2)
  document.getElementById("coilFeedpointDistanceSpan").textContent = `\\(d_{fromfeedpt} = \\) ${(coilFeedpointDistanceDisplay).toString()}m`
  MathJax.typeset()
}

async function updateShortenedDipole(event) {
  var outerFrequency = inputElements.outerFrequency.elem.value
  var shortenAmount = inputElements.shortenAmount.elem.value
  var lengthShortened = math.round(math.evaluate(`143 / ${outerFrequency} * (1 - ${shortenAmount})`),2)
  var lengthRemoved = math.round(math.evaluate(`143 / ${outerFrequency} * ${shortenAmount}`),2)
  document.getElementById("shortenedLength").textContent = `\\(l_{shortened} = \\) ${(lengthShortened).toString()}m`
  document.getElementById("lengthRemoved").textContent = `\\(l_{removed} = \\) ${(lengthRemoved).toString()}m`
  
    MathJax.typeset()
}

//on frequency update, change dipole length
async function calcDipoleLength() {
  updateRequiredFields()
	updateShortenedDipole()
  var outerFrequency = math.bignumber(inputElements.outerFrequency.elem.value)
  var innerFrequency = math.bignumber(inputElements.innerFrequency.elem.value)
  var coilFeedpointDistance = math.bignumber(inputElements.coilFeedpointDistance.elem.value)
  var shortenAmount = math.bignumber(inputElements.shortenAmount.elem.value)
  var wireDiameter = math.bignumber(inputElements.wireDiameter.elem.value)
  var electricalHeight = math.bignumber(inputElements.electricalHeight.elem.value)
  
  console.log(`innerFrequency ${innerFrequency}`)
  console.log(`outerFrequency ${outerFrequency}`)
  
  var betaOne = math.evaluate(`90 - 90 * (${shortenAmount} + ${coilFeedpointDistance})`)
  var betaTwo = math.evaluate(`90 - 90 * ${coilFeedpointDistance}`)
  var impedanceZero = math.evaluate(`138 * log10(4*${electricalHeight} / (${wireDiameter} / ${1000}))`)
  var reactanceOne = math.evaluate(`-1 * ${impedanceZero} * cot(${betaOne} deg)`)
  var reactanceTwo = math.evaluate(`-1 * ${impedanceZero} * cot(${betaTwo} deg)`)
  
  var loadReactance = math.round(math.evaluate(`${reactanceTwo} - ${reactanceOne}`),0)
  var loadInductance = math.round(math.evaluate(`${loadReactance} / (2 * pi * ${outerFrequency})`),2)
	
  //var trapCapacitance = math.round(math.evaluate(`1 * 10^6 / ((2 * pi * ${innerFrequency})^2 * ${loadInductance})`),2)
  var trapCapacitance = math.round(math.evaluate(`1 * 10^6 / ((2 * pi * ${innerFrequency})^2 * ${loadInductance})`),2)
  
  var trapReactance = math.round(math.evaluate(`2 * pi * ${innerFrequency} * ${loadInductance}`),0)
  var trapInductance = math.round(math.evaluate(`${trapReactance} / (2 * pi * ${innerFrequency})`),2)
  
  console.log(`betaOne ${betaOne}`)
  console.log(`betaTwo ${betaTwo}`)
  console.log(`impedanceZero ${impedanceZero}`)
  console.log(`reactanceOne ${reactanceOne}`)
  console.log(`reactanceTwo ${reactanceTwo}`)
  console.log(`loadReactance ${loadReactance}`)
  console.log(`loadInductance ${loadInductance}`)
  console.log(`trapCapacitance ${trapCapacitance}`)
  console.log(`trapReactance ${trapReactance}`)
  console.log(`trapInductance ${trapInductance}`)
  
  inputElements.loadReactance.elem.value = `${loadReactance.toString()}Ω`
  document.getElementById("loadReactanceSpan").textContent = `\\(X_{load} = \\) ${loadReactance.toString()}Ω`
  document.getElementById("loadInductanceSpan").textContent = `\\(L_{load} = \\frac {X_{load}} {2πf_{outer}} = \\frac {${loadReactance}Ω} {{2π${outerFrequency}MHz}} = \\) ${trapInductance.toString()}μH`
  document.getElementById("trapInductanceSpan").textContent = `\\(L_{trap} = L_{load} = \\) ${loadInductance.toString()}μH`
  document.getElementById("trapCapacitance").textContent = `\\(C_{trap} = \\frac 1 {(2πf)^2L_{trap}} = \\frac 1 {({2π${innerFrequency}MHz)^2}${trapInductance}μH} = \\) ${trapCapacitance.toString()}pF`
  document.getElementById("trapReactanceSpan").textContent = `\\(X_{trap} =  {2πf_{inner}{L_{load}} } = {{2π${innerFrequency}MHz}{${loadInductance}μH} } = \\) ${trapReactance.toString()}Ω`
  
  MathJax.typeset()
}