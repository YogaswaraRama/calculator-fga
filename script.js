const calculatorScreen = document.querySelector(".answer");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  currentNumber === "0" ? (currentNumber = number) : (currentNumber += number);
};

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const clear = document.querySelector(".is-clear");
clear.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
