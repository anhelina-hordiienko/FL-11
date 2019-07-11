function isBigger(firstNumber, secondNumber) {
  return firstNumber > secondNumber;
}

function isSmaller(firstNum2, secondNum2) {
  return !isBigger(firstNum2, secondNum2);
}
console.log(isSmaller(3, 2));