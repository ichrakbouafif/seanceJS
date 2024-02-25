let x = document.querySelector("#X");
let y = document.querySelector("#Y");


function showAddition() {
    document.querySelector("h3").innerHTML = addition(
          Number(x.value),
          Number(y.value)
        );
      }

function showMultiplication() {
    document.querySelector("h3").innerHTML = multiplication(
        Number(x.value),
        Number(y.value)
      );

}
function showDivision(){
    document.querySelector("h3").innerHTML = division(
        Number(x.value),
        Number(y.value)
      );
}
function showSubstraction(){
    document.querySelector("h3").innerHTML = substraction(
        Number(x.value),
        Number(y.value)
      );
}



function addition(x, y) {
    return "X+Y= : " + (x + y);
  }
function substraction(x, y) {
    return "X-Y= : " + (x - y);
  }
function multiplication(x, y) {
    return "X*Y= : " + (x * y);
  }

function division(x, y) {
    return "X/Y= : " + (x / y);
  }