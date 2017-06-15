var button = document.getElementById("grow");

button.addEventListener("click",buttonClick);

var trees = {
	height: "",
	style: ""
};

//button
function buttonClick() {
// 
	trees.style = document.getElementById("style").value;
	trees.height = document.getElementById("height").value;
	console.log("click");
	console.log(trees);
};

// for loop with con inside. how to use con to get img

function tree(){
	for (var i = 0; i < trees.height; i= i +2)
		console.log(trees.height);
}
tree();



