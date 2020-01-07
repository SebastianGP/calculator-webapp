// Accumulators

const storage = {
	accumulator: 0,
	sign: "",
	result: 0
}


const add = (a, b) => {
	return a + b
}


const minus = (a, b) => {
	return a - b
}

const divide = (a, b) => {
	return a / b
}

const multiply = (a, b) => {
	return a * b
}



// Clear Input field, and reset accumulator
document.querySelector("#clear").addEventListener("click", (e) => {
	document.getElementById("input").value = "";
	saveIntoStorage();
})
// 


// Storing calculations
const saveIntoStorage = () => {
	storage.accumulator = parseInt(document.getElementById("input").value, 10);
	// console.log(storage.accumulator)
	return storage.accumulator;
}


