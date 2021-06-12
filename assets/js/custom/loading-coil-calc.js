//setup
console.log('init');

var inputIds = [
  "coilFeedpointDistance",
  "shortenFeet",
  "wireDiameter",
  "electricalHeight",
  "frequency"
]
var inputElements = inputIds
  .map(inputId =>{
    return document.getElementById(inputId)
  })
var keyUpsRegistered = inputElements
  .map(input => {
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    });
  })

console.log('fin');

//onclick
window.update = function() {
  console.log(dimA.value);
}
