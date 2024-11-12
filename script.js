const inputContent = document.getElementById("text-input");
const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", addItemFunc)

function addItemFunc(){
    if(inputContent.value === ""){
    alert("Put a valid input")
 }else{
    let li = document.createElement("li");
    li.innerHTML = inputContent.value;
    output.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }
 inputContent.value = ""
 saveData()
}

output.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})