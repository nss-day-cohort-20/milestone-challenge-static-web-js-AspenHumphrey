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
tree(trees);
};

// for loop with con inside. how to use con to get img

function tree(trees){

	for (var i = 0; i < trees.height; i++)
		console.log(" ".repeat(trees.height-i+1) + trees.style.repeat(2*i+1) );
}



