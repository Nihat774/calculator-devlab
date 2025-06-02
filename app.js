const btn = document.getElementsByClassName("btn");
const display = document.querySelector(".display");
const box = document.querySelector(".box");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

let currentValue = "";
let previousValue = "";
let operandValue = "";

function appendNumber(number) {
  currentValue += number;
  display.value = currentValue;
}

function appendOperand(operand) {
  if (currentValue === "") return;
  if (previousValue !== "") {
    calculate();
  }
  operandValue = operand;
  previousValue = currentValue;
  currentValue = "";
  display.value = `${previousValue} ${operandValue} `;
}

function calculate() {
  if (previousValue === "" || currentValue === "") return;
  let prev = parseFloat(previousValue);
  let current = parseFloat(currentValue);
  let result;
  switch (operandValue) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("0-a bölmə yoxdur.");
        return;
      }
      result = prev / current;
      break;
    case "%":
      result = (prev * current) / 100;
      break;
    default:
      return;
  }
  currentValue = result.toString();
  operandValue = "";
  previousValue = "";
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  previousValue = "";
  operandValue = "";
  display.value = "";
}

window.onload = function () {
  const mode = localStorage.getItem("mode") || "light";

  if (mode === "dark") {
    box.classList.add("dark-mode");
    sun.classList.add("active");
    moon.classList.remove("active");
  } else {
    box.classList.remove("dark-mode");
    moon.classList.add("active");
    sun.classList.remove("active");
  }
};

function modeChange() {
  if (box.classList.contains("dark-mode")) {
    box.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
    moon.classList.add("active");
    sun.classList.remove("active");
  } else {
    box.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
    sun.classList.add("active");
    moon.classList.remove("active");
  }
}
