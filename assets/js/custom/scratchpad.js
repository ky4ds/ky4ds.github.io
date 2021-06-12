console.log( 'Hello, world!' );

var dimA = document.getElementById("dimA")
var dimB = document.getElementById("dimB")

var keyUpInputs = [dimA, dimB]
var keyUpsRegistered = keyUpInputs
  .map(input => {
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    });
  })

window.update = function() {
  // var dim_a = document.getElementById('dima').value,
  //     dim_b = document.getElementById('dim_b').value;
  
  console.log(dimA.value);
}

console.log('fin');
