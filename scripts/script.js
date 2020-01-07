// Stack --------------------------------------------------------

class Stack {
	constructor() {
		this.items = []
	}

	pop() {
		if (this.items.length === 0) {
			return Null
		}
		else {
			return this.items.pop();
		}
	}

	push(number) {
		// When an operation is click, the number will be pushed onto the stack!		
		this.items.push(number);
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	showStack() {
		return this.items
	}

	reset() {
		this.items = []
	}

}

// INIT -----------------------------------------------------------------
var numStack = new Stack();
var opStack = new Stack();
// ------------------------------------------------------------------------