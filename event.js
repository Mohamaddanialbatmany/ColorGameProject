var modeType = 6;
var colors =  randomColor(modeType);
var h1 = document.querySelector("h1");
var colorsquare = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("RGB");
var peackedColor = colorRandom().trim();
colorDisplay.textContent = peackedColor;
var messageDisplay = document.querySelector("#Message");
var resetButton = document.querySelector("#reset");
var esayBtn = document.querySelector("#esay");
var hardBtn = document.querySelector("#hard");

esayBtn.addEventListener("click", function(){
	esayBtn.classList.add("pickmode");
	hardBtn.classList.remove("pickmode");
	modeType = 3;
	//reset the colors
	colors =  randomColor(modeType);
	//reset the pick color
	peackedColor = colorRandom().trim();
	//reset the dosplay message
	colorDisplay.textContent = peackedColor;
	// make 3 squaer
	for( var i = 0; i < colorsquare.length; i++){
		if (colors[i]) {
			colorsquare[i].style.backgroundColor = colors[i];
		}else{
			colorsquare[i].style.display = "none";			
		}
	}
	// h1 colors reset
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function(){
	esayBtn.classList.remove("pickmode");
	hardBtn.classList.add("pickmode");
	modeType = 6;
	//reset the colors
	colors =  randomColor(modeType);
	//reset the pick color
	peackedColor = colorRandom().trim();
	//reset the dosplay message
	colorDisplay.textContent = peackedColor;
	// make 3 squaer
	for( var i = 0; i < colorsquare.length; i++){
			colorsquare[i].style.backgroundColor = colors[i];
			colorsquare[i].style.display = "block";
		}
	// h1 colors reset
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

resetButton.addEventListener("click", function(){

	//reset the colors
	colors =  randomColor(modeType);
	//picked color change to the color
	peackedColor = colorRandom().trim();
	//reset colorDisplay
	colorDisplay.textContent = peackedColor;
	//make squaers colord
	for(var i = 0; i < colorsquare.length; i++){
		colorsquare[i].style.backgroundColor = colors[i];
	}
	//h1 color reset
	h1.style.backgroundColor = "steelblue";
	// change the text button
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
});

for(var i = 0; i < colorsquare.length; i++){
    colorsquare[i].style.backgroundColor = colors[i];

    colorsquare[i].addEventListener("click", function(){
    	var thissquare = this.style.backgroundColor;
    	if (thissquare === peackedColor) {
    		squareOne();
    		messageDisplay.textContent = "Correct!";
    		h1.style.backgroundColor = thissquare;
    		resetButton.textContent = "Play Again !";
    	}else{
    	messageDisplay.textContent = "Try Again!!";
    	this.style.backgroundColor = "#579b98";
    	}
    	// console.log(thissquare, peackedColor);
    });
};

function squareOne(){
	for(var i = 0; i < colorsquare.length; i++){
    	colorsquare[i].style.backgroundColor = peackedColor;
	};
}

function colorRandom(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor(num){
	//make arr
	var arr = []
	//make random nums in the arr
	for(var i = 0; i < num; i++){
		arr.push(randomNum())
	}
	//return the arr
	return arr;
}

function randomNum(){
	//pick random num for red
	var r = Math.floor(Math.random() * 256);
	//pick random num for green
	var g = Math.floor(Math.random() * 256);
	//pick random num for blue
	var b = Math.floor(Math.random() * 256);

	//rgb(r, g, b,);
	return "rgb("+ r +", " +g +", " +b +")";
}