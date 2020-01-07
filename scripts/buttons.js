
//NUMBERS
// Make this into function, to update  storage.currentNums
document.getElementById("1").addEventListener("click", (e) => {
	console.log("click");
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator);
})

document.getElementById("2").addEventListener("click", (e) => {
	console.log("click");
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("3").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("4").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("5").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("6").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("7").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("8").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})

document.getElementById("9").addEventListener("click", (e) => {
	console.log("click");
	
	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})


document.getElementById("zero").addEventListener("click", (e) => {
	console.log("click");

	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})



document.getElementById("point").addEventListener("click", (e) => {
	console.log("click");

	document.getElementById("input").value += e.target.textContent
	console.log(document.getElementById("input").value);
	// console.log(storage.accumulator)
})


// Clear Input field, and reset accumulator
document.querySelector("#clear").addEventListener("click", (e) => {
	document.getElementById("input").value = "";
})

// Operations -----------------------------------------------------------------
document.getElementById("plus").addEventListener("click", (e) => {
	console.log("click");

	// document.getElementById("input").value += e.target.textContent
	console.log(e.target.value);
	// console.log(storage.accumulator)
	numStack.push(document.getElementById("input").value);
	console.log(numStack.showStack());
	opStack.push(e.target.value);
	document.getElementById("input").value = "";
})

document.getElementById("minus").addEventListener("click", (e) => {
	console.log("click");

	// document.getElementById("input").value += e.target.textContent
	console.log(e.target.value);
	// console.log(storage.accumulator)
	numStack.push(document.getElementById("input").value)
	opStack.push(e.target.value);
	document.getElementById("input").value = "";
})

document.getElementById("divide").addEventListener("click", (e) => {
	console.log("click");

	// document.getElementById("input").value += e.target.textContent
	
	console.log(e.target.value);
	// console.log(storage.accumulator)
	numStack.push(document.getElementById("input").value)
	opStack.push(e.target.value);
	document.getElementById("input").value = "";
})

document.getElementById("times").addEventListener("click", (e) => {
	console.log("click");

	// document.getElementById("input").value += e.target.textContent
	console.log(e.target.value);
	// console.log(storage.accumulator)
	numStack.push(document.getElementById("input").value)
	opStack.push(e.target.value);
	document.getElementById("input").value = "";
})

// Equals ----------------------------------------------------------

document.getElementById("equals").addEventListener("click", (e) => {
	console.log("click");
	numStack.push(document.getElementById("input").value)

	// document.getElementById("input").value += e.target.textContent
	console.log(e.target.value);
	// console.log(storage.accumulator)

	if(opStack.peek() == "+"){
		// Now it's just a game of popping
		
		opStack.pop();
		document.getElementById("input").value = parseInt(numStack.pop(), 10) + parseInt(numStack.pop(), 10);
	}

	else if (opStack.peek() == "*") {
		// Now it's just a game of popping
		
		opStack.pop();
		document.getElementById("input").value = parseInt(numStack.pop(), 10) * parseInt(numStack.pop(), 10);
	}


	else if (opStack.peek() == "/") {
		// Now it's just a game of popping
		
		opStack.pop();
		a = parseInt(numStack.pop(), 10) 
		b = parseInt(numStack.pop(), 10)
		document.getElementById("input").value = b / a;
	}

	else if (opStack.peek() == "-") {
		// Now it's just a game of popping
		
		opStack.pop();
		a = parseInt(numStack.pop(), 10)
		b = parseInt(numStack.pop(), 10)
		document.getElementById("input").value = b - a;
	}


})



