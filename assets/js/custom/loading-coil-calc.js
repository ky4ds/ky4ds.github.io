//setup
console.log('init');

var inputIdsDefaultValues = {
  frequency: { inputId: "frequency", default: "14.055" },
  dipoleLength: { inputId: "dipoleLength", default: "10.17" },
  coilFeedpointDistance: { inputId: "coilFeedpointDistance", default: "1.6" },
  shortenMeters: { inputId: "shortenMeters", default: "1.6" },
  wireDiameter: { inputId: "wireDiameter", default: "1.291" },
  electricalHeight: { inputId: "electricalHeight", default: "6" },
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
        document.getElementById("submit").click();
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

console.log('fin');

//on submit, run calculation
window.update = function() {
  calcDipoleLength()
  console.log("not implemented");
}

//on frequency update, change dipole length
function calcDipoleLength() {
	var frequency = inputElements.frequency.elem.value;
  var dipoleLength = inputElements.dipoleLength.dipoleLength.value;
  var coilFeedpointDistance = inputElements.coilFeedpointDistance.dipoleLength.value;
  var shortenMeters = inputElements.shortenMeters.dipoleLength.value;
  var wireDiameter = inputElements.wireDiameter.dipoleLength.value;
  var electricalHeight = inputElements.electricalHeight.dipoleLength.value;
  
  console.log("not finished implementing")
}