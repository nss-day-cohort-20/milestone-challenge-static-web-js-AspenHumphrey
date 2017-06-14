var button = document.getElementById("grow");

button.addEventListener("click",buttonClick);

var tree = {
	height: "",
	style: ""
};

//button
function buttonClick() {
// 
	tree.style = document.getElementById("style").value;
	tree.height = document.getElementById("height").value;
	console.log("click");
	console.log(tree);

};




