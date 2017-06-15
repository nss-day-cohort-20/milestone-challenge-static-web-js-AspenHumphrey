//identify button var with html by id
var button = document.getElementById("grow");

//tell JS to wait for click
button.addEventListener("click", checkInput);

// establishing var on html by id
var style = document.getElementById("style");
var height = document.getElementById("height");

// defining trees with user input with empty ""
var trees = {
	height: "",
	style: ""
};

// checking if users input values into spaces
function checkInput(){
	// if height was empty and or style is empty run alert
 		if (height.value === "" || style.value === "") {
 			// alert tells user to fill 2 spaces
 			alert("whoops! please fill both spaces!");
 			// else is saying if both feilds are full then run function buttonClick
 		} else {
 			// calling/running buttonClick()
 			buttonClick();
 		}
 };

//button
function buttonClick() {
	// set obj tree (height) to what user inputs
	trees.height = height.value;
	// set obj tree (style) to what user inputs
	trees.style = style.value;
	console.log("click");
	console.log(trees);
//calling/running function tree
tree(trees);
};

// function called tree uses trees obj as argument
function tree(trees){

// loop through trees.height
	for (var i = 0; i < trees.height; i++)
		// con logging tree
		console.log(" ".repeat(trees.height-i+1) + trees.style.repeat(2*i+1) );
}



