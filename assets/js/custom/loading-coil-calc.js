//setup
console.log('init');

var inputIdsDefaultValues = [
  { inputId: "coilFeedpointDistance", default: "" },
  { inputId: "shortenFeet", default: "" },
  { inputId: "wireDiameter", default: "" },
  { inputId: "electricalHeight", default: "" },
  { inputId: "frequency", default: "" }
]
var inputElements = inputIdsDefaultValues
  .map(inputIdDefault =>{
    return {
      inputId: inputIdDefault.inputId,
      element: document.getElementById(inputIdDefault.inputId)
    }
  })
var initializeInputElements = inputElements
  .map(input => {
    input.element.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
      
      //TODO: set default value for each input element
      
      return input;
    });
  })

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