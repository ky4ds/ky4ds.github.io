//setup
console.log('init');

// var inputIdsDefaultValues = [
//   { inputId: "coilFeedpointDistance", default: "" },
//   { inputId: "shortenFeet", default: "" },
//   { inputId: "wireDiameter", default: "" },
//   { inputId: "electricalHeight", default: "" },
//   { inputId: "frequency", default: "" }
// ]
var inputIdsDefaultValues = {
  frequency: { inputId: "frequency", default: "14.055" },
  dipoleLength: { inputId: "dipoleLength", default: "" },
  coilFeedpointDistance: { inputId: "coilFeedpointDistance", default: "" },
  shortenFeet: { inputId: "shortenFeet", default: "" },
  wireDiameter: { inputId: "wireDiameter", default: "" },
  electricalHeight: { inputId: "electricalHeight", default: "" },
}

var inputElements = Object.entries(inputIdsDefaultValues)
  .reduce((acc, entry) =>{
    var key = entry[0]
    var inputId = entry[1].inputId
    var defaultValue = entry[1].default
	  var element = document.getElementById(inputId);
    
    //register enter key calculation
    element.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
        console.log('bleh')
      }
    });
	  
    return {...acc, [key]: {
        inputId: inputId,
        elem: element,
        defaultValue: defaultValue
    }}
  }, {})

//configure frequency -> dipoleLength calc
inputElements.frequency.elem.addEventListener("focusout", function(event){
	var frequency = inputElements.frequency.elem.value
	var newDipoleLength = math.round(143 / frequency,2)
  inputElements.dipoleLength.elem.value = newDipoleLength
})

// var initializeInputElements = inputElements
//   .map(input => {
//     input.element.addEventListener("keyup", function(event) {
//       if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("submit").click();
//       }
//
//       //TODO: set default value for each input element
//
//       return input;
//     });
//   })

console.log('fin');

//on submit, run calculation
window.update = function() {
  calcDipoleLength()
  console.log("not implemented");
}

//on frequency update, change dipole length
function calcDipoleLength() {
  var frequency = document
    .getElementById("frequency")
    .value;
  var dipoleLength = 143 / parseInt(frequency)
  document
    .getElementById("dipoleLength")
    .innerHTML = dipoleLength;
}