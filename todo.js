console.log("Hi Ma!");

function addItem() {
    toDoInput = document.getElementById("to-do-input").value;
    let li = document.createElement("li");
    li.innerHTML = toDoInput;
    document.querySelector("ul").appendChild(li);
    document.getElementById("to-do-input").value = "";
    li.onclick = function removeItem() { this.parentNode.removeChild(this); }
}