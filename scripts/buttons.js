// Numbers------------------------------------------
document.getElementById("1").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("2").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("3").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("4").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("5").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("6").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("7").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("8").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("9").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("zero").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

document.getElementById("point").addEventListener("click", e => {
  document.getElementById("input").value += e.target.textContent;
});

// Clear Input field, and reset accumulator
document.querySelector("#clear").addEventListener("click", e => {
  numStack.reset();
  opStack.reset();
  document.getElementById("input").value = "";
});

// Operations -----------------------------------------------------------------
document.getElementById("plus").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  opStack.push(e.target.value);
  document.getElementById("input").value = "";
});

document.getElementById("minus").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  opStack.push(e.target.value);
  document.getElementById("input").value = "";
});

document.getElementById("divide").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  opStack.push(e.target.value);
  document.getElementById("input").value = "";
});

document.getElementById("times").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  opStack.push(e.target.value);
  document.getElementById("input").value = "";
});

// Equals ----------------------------------------------------------

document.getElementById("equals").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  if (opStack.peek() == "+") {
    opStack.pop();
    document.getElementById("input").value =
      parseFloat(numStack.pop(), 10) + parseFloat(numStack.pop(), 10);
  } else if (opStack.peek() == "*") {
    opStack.pop();
    document.getElementById("input").value =
      parseFloat(numStack.pop(), 10) * parseFloat(numStack.pop(), 10);
  } else if (opStack.peek() == "/") {
    opStack.pop();
    a = parseFloat(numStack.pop(), 10);
    b = parseFloat(numStack.pop(), 10);
    document.getElementById("input").value = b / a;
  } else if (opStack.peek() == "-") {
    opStack.pop();
    a = parseFloat(numStack.pop(), 10);
    b = parseFloat(numStack.pop(), 10);
    document.getElementById("input").value = b - a;
  }
});

// Percent------------------------------------
document.getElementById("percent").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  document.getElementById("input").value = parseFloat(numStack.pop(), 10) / 100;
});
// +/- ------------------------------------
document.getElementById("+-").addEventListener("click", e => {
  numStack.push(document.getElementById("input").value);
  a = numStack.pop() * -1;
  document.getElementById("input").value = a;
});

// Del ------------------------------------
document.getElementById("del").addEventListener("click", e => {
  num = document.getElementById("input").value;
  updatedNum = num.replace(num[num.length - 1], "");

  document.getElementById("input").value = updatedNum;
});
