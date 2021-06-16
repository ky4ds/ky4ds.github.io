//setup
console.log('init');

var inputIdsDefaultValues = {
  frequency: { inputId: "frequency", default: "14.055" },
  dipoleLength: { inputId: "dipoleLength", default: "10.17" },
  coilFeedpointDistance: { inputId: "coilFeedpointDistance", default: "0.78" },
  shortenAmount: { inputId: "shortenAmount", default: "0.02" },
  wireDiameter: { inputId: "wireDiameter", default: "1.628" },
  electricalHeight: { inputId: "electricalHeight", default: "6" },
  reactanceLoad: { inputId: "reactanceLoad", default: "" },
  coilInductance: { inputId: "coilInductance", default: "" },
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
        document.getElementById("calculate").click();
      }
    });
    
    return {...acc, [key]: {
        inputId: inputId,
        elem: element,
        defaultValue: defaultValue
    }}
  }, {})

//configure frequency -> dipoleLength calc; triggered by tab
inputElements.frequency.elem.addEventListener("focusout", function(event){
	var frequency = inputElements.frequency.elem.value
	var newDipoleLength = math.round(143 / frequency,2)
  inputElements.dipoleLength.elem.value = newDipoleLength
})

console.log('fin')

//run calculation after math.js has loaded
const delay = ms => new Promise(res => setTimeout(res, ms));
range = [...Array(1000).keys()]
range
  .some(async function (range = 1000, i) {
    await delay(i*i+500)
    if (typeof math !== "undefined") {
      calcDipoleLength()
      return true
    }
  })

//on frequency update, change dipole length
function calcDipoleLength() {
	var frequency = math.bignumber(inputElements.frequency.elem.value)
  var dipoleLength = math.bignumber(inputElements.dipoleLength.elem.value)
  var coilFeedpointDistance = math.bignumber(inputElements.coilFeedpointDistance.elem.value)
  var shortenAmount = math.bignumber(inputElements.shortenAmount.elem.value)
  var wireDiameter = math.bignumber(inputElements.wireDiameter.elem.value)
  var electricalHeight = math.bignumber(inputElements.electricalHeight.elem.value)
	
  var betaOne = math.subtract(90,math.multiply(90,(math.add(shortenAmount,coilFeedpointDistance))))
  var betaTwo = math.subtract(90,math.multiply(math.bignumber(90),coilFeedpointDistance))
  var impedanceZero = math.round(math.multiply(math.bignumber(138),math.log10(math.divide(math.multiply(4,electricalHeight),math.divide(wireDiameter,math.bignumber(1000))))),5)
  // var cotOne = math.divide(1,math.tan(math.unit(betaOne,'deg')))
  // console.log(`cotOne ${cotOne}`)
  var reactanceOne = math.round(math.multiply(-1,math.multiply(impedanceZero,math.cot(math.unit(betaOne,'deg')))),5)
  var reactanceTwo = math.round(math.multiply(-1,math.multiply(impedanceZero,math.cot(math.unit(betaTwo,'deg')))),5)
  var reactanceLoad = math.round(math.subtract(reactanceTwo,reactanceOne),0)
	var coilInductance = math.round(math.divide(reactanceLoad,math.multiply(2,math.round(math.PI,10),frequency)),2)
  
  console.log(`betaOne ${betaOne}`)
  console.log(`betaTwo ${betaTwo}`)
  console.log(`impedanceZero ${impedanceZero}`)
  console.log(`reactanceOne ${reactanceOne}`)
  console.log(`reactanceTwo ${reactanceTwo}`)
  console.log(`reactanceLoad ${reactanceLoad}`)
  console.log(`coilInductance ${coilInductance}`)
  
  inputElements.reactanceLoad.elem.value = `${reactanceLoad.toString()}Ω`
  inputElements.coilInductance.elem.value = `${coilInductance.toString()}μH`
}