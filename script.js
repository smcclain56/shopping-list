var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create a new element and style it and append to div
	var li = document.createElement("li");
	li.classList.add("delete");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click",toggleDone);
	input.value = "";

	// create delete button, style it and append to div
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "delete";
	deleteButton.addEventListener("click",removeParent);
	li.appendChild(deleteButton);

	// add new element to ul
	ul.appendChild(li);
}

function toggleDone(evt){
	evt.target.classList.toggle("done");
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markAsDone(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}
}


function deleteItemOnClick(){
	var deleteButton = document.querySelectorAll("delete");
	console.log(deleteButton);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
