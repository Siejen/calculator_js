//calculator.js is provided and linked to the page for you, but it's blank, 
//what's the first thing you write? (Without it, your JS won't be able to find any HTML elements on the page---why?)


window.onload =  function(event){
	var divB1 = document.getElementById("b1");
	var divB2 = document.getElementById("b2");
	var divB3 = document.getElementById("b3");
	var divB4 = document.getElementById("b4");
	var divB5 = document.getElementById("b5");
	var divB6 = document.getElementById("b6");
	var divB7 = document.getElementById("b7");
	var divB8 = document.getElementById("b8");
	var divB9 = document.getElementById("b9");
	var divB0 = document.getElementById("b0");
	var divBplus = document.getElementById("b+");
	var divBminus = document.getElementById("b-");
	var divBmultiply = document.getElementById("b*");
	var divBdivide = document.getElementById("b/");
	var divBenter = document.getElementById("be");
	var divBclear = document.getElementById("bc");
	var resultDisplay = document.getElementById("result_display_value");

	//Program state of variables
	var operandA = "invalid";
	var operandB = "invalid";
	var operation = "invalid";


	divB1.onclick = function(event) {
		console.log("Btn1 was clicked.");
		resultDisplay.innerHTML = 1;
		if( operandA === "invalid" ) {
			operandA = 1;
		}
		else if( operandB === "invalid" ) {
			operandB = 1;
		}
	}

	divB2.onclick = function(event) {
		console.log("Btn2 was clicked.");
		resultDisplay.innerHTML = 2;
		if( operandA === "invalid" ) {
			operandA = 2;
		}
		else if( operandB === "invalid" ) {
			operandB = 2;
		}
	}

	divB3.onclick = function(event) {
		console.log("Btn3 was clicked.");
		resultDisplay.innerHTML = 3;
		if( operandA === "invalid" ) {
			operandA = 3;
		}
		else if( operandB === "invalid" ) {
			operandB = 3;
		}
	}

	divBplus.onclick = function(event) {
		console.log("Btn+ was clicked.")

		if( operation === "invalid" ) {
			operation = "+";
		}
	}

	divBminus.onclick = function(event) {
		console.log("Btn- was clicked.")

		if( operation === "invalid" ) {
			operation = "-";
		}
	}

	divBenter.onclick = function(event) {
		console.log("Btn enter was clicked.")

		if( operation === "+" ) {
			var result = operandA + operandB;
			resultDisplay.innerHTML = result;
		} else if (operation === "-") {
			resultDisplay = operandA - operandB;
		}
	}

	divBclear.onclick = function(event) {
		console.log("Btn clear was clicked.");
		operandA = "invalid";
		operandB = "invalid";
		operation = "invalid";
		resultDisplay.innerHTML = " ";		
	}

}










