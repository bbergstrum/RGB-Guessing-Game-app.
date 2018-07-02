// Variables
var difficultyVariable = 6 //number of color squares (default 6)
var colors = [] //color generation
var pickedColor; //answer generation
var squares = document.querySelectorAll(".square"); //square selection
var colorDisplay = document.getElementById("colorDisplay"); // correct color display
var messageDisplay = document.querySelector("#message"); // user imput result
var topDisplay = document.getElementById("topDisplay"); //top displaybar
var resetButton = document.querySelector("#reset"); // reset button 
var difficultyButtons = document.querySelectorAll(".mode"); //difficulty selectors

init();


// Initial Function Logic
function init(){
	setupDifficultyButtons();
	setupSquareTiles();
	reset();
}

// Event Listener Logic
function setupDifficultyButtons(){
	//difficulty event listeners
	for (var i = 0; i < difficultyButtons.length; i++){
		difficultyButtons[i].addEventListener("click", function(){
			difficultyButtons[0].classList.remove("selected");
			difficultyButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? difficultyVariable = 3: difficultyVariable = 6;
			reset();
		});
	}
}

// Square Tile Logic
function setupSquareTiles(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares.
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedcolor.
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play Again?"
					changeColors(clickedColor);
					topDisplay.style.backgroundColor = clickedColor; 
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again."
			}
		});
	}	
}
//Reset Logic
function reset(){
	colors = randomColorGen(difficultyVariable);
	// pick a new random color from array.
	pickedColor = pickRandom();
	// change color display to match color.
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours" 
	// revert user imput back.
	messageDisplay.textContent = "";
	// change squares.
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	topDisplay.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

//Color Logic
function changeColors(color){
	// loop through all squares.
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color.
		squares[i].style.backgroundColor = color;
	}
}

// Color Array Logic. 
function pickRandom(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorGen(num){
	// make the array.
	var arr = []
	// add num random colors to arr.
	for(i = 0; i < num; i++){
		// push random color into arr.
		arr.push(randomColor())
	}
	// return array.
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255.
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255.
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255.
	var b = Math.floor(Math.random() * 256);
	// spacing required for comparision since array output and string output differ
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



// The ternary operator is an operator that takes three arguments.
	// The first argument is a comparison argument, the second is the 
	// result upon a true comparison, and the third is the result upon 
	// a false comparison. 
	// Is a shortened way of writing an if-else statement.
	// eg if this.textcontent is equal to Easy then difficulty is easy(3), otherwise difficulty is hard(6)

// OlD INITIAL FUNCTION
// function init(){
// 	// difficulty button listeners
// 	for (var i = 0; i < difficultyButtons.length; i++){
// 		difficultyButtons[i].addEventListener("click", function(){
// 			difficultyButtons[0].classList.remove("selected");
// 			difficultyButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? difficultyVariable = 3: difficultyVariable = 6;
// 			reset();
// 		});
// 	}
// 	for(var i = 0; i < squares.length; i++){
// 	//add click listeners to squares.
// 		squares[i].addEventListener("click", function(){
// 			var clickedColor = this.style.backgroundColor;
// 			//compare color to pickedcolor.
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!";
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				topDisplay.style.backgroundColor = clickedColor; 
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again."
// 		}
// 	});
// }	
// reset();
// }

// OLD CODE

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected")
// 	hardBtn.classList.remove("selected")
// 	// color array now has 3 items
// 	difficultyVariable = 3
// 	colors = randomColorGen(difficultyVariable);
// 	//substitute new difficulty
// 	pickedColor = pickRandom();
// 	colorDisplay.textContent = pickedColor;
// 	// difficulty change logic
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	topDisplay.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected")
// 	// color array now has 6 items
// 	difficultyVariable = 6
// 	colors = randomColorGen(difficultyVariable);
// 	//substitute new difficulty
// 	pickedColor = pickRandom();
// 	colorDisplay.textContent = pickedColor;
// 	// difficulty change logic
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	topDisplay.style.backgroundColor = "steelblue";
// });

// resetButton.addEventListener("click", function(){
// 	// generate all new colors.
// 	colors = randomColorGen(difficultyVariable);
// 	// pick a new random color from array.
// 	pickedColor = pickRandom();
// 	// change color display to match color.
// 	colorDisplay.textContent = pickedColor;
// 	this.textContent = "New Colours" //easier to write 'this' 
// as code is already inside the eventlistener.
// 	// revert user imput back.
// 	messageDisplay.textContent = "";
// 	// change squares.
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 	}
// 	topDisplay.style.backgroundColor = "steelblue";
// });

// colorDisplay.textContent = pickedColor;

// for(var i = 0; i < squares.length; i++){
// 	// add initial colors to squares.
// 	squares[i].style.backgroundColor = colors[i];

// 	//add click listeners to squares.
// 	squares[i].addEventListener("click", function(){
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color to pickedcolor.
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct!";
// 			resetButton.textContent = "Play Again?"
// 			changeColors(clickedColor);
// 			topDisplay.style.backgroundColor = clickedColor; 
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again."
// 		}
// 	});
// }