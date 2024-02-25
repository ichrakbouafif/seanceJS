let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");

let checkbox = document.querySelector("checkbox");

let personDisplay = document.querySelector("#person-display");
let ul = document.querySelector("ul");
let errorMessage = document.getElementById("error-message");
errorMessage.style.display="none";
console.log(errorMessage);
input.onkeyup = function(){
    personDisplay.innerHTML=input.value;
}

button.addEventListener("click", addTodo);

function addTodo() {
    if (input.value==''){
        alert ("empty to-do");
        input.classList.add("input-error");
        errorMessage.style.display="block";
        return;
    }
   else{
    input.classList.remove("input-error");
    errorMessage.classList.remove("afficher");
    errorMessage.style.display="none";
    //ajout
/*  let li=document.createElement("li");
let span = document.createElement("span");
span.innerHTML = input.value ;
let checkbox = document.createElement("input");
checkbox.type ="checkbox"
let button = document.createElement("button");
button.innerText ="delete";
button.addEventListener("click",deletetodo);
li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(button);
liste.appendChild(li);

   }*/

        liste.innerHTML += `
        <li>
         <input type="checkbox"> 
         ${input.value} 
         <button class="btn" onclick="deletetodo(this)"> delete </button>
        </li>`;
    }
    input.value='';}
input.addEventListener("keypress",function(e){
    if (e.key=="Enter"){
        addTodo();
    }
})
function deletetodo(deleteButton){
    deleteButton.parentElement.remove();
}
ul.addEventListener("click",check);
function check(e) {
    if (e.target.checked == true) {
      e.target.parentElement.style.textDecoration ="line-through";
    } else {
      e.target.parentElement.style.textDecoration ="";
    }
  }
  