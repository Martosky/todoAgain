const inputContent = document.getElementById("text-input");
const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", addItemFunc)

function addItem(){
    if(inputContent.value === ""){
    alert("Put a valid input")
 }else{
    let li = document.createElement("li");
    li.innerHTML = inputContent.value;
    output.appendChild(li)
 }
}