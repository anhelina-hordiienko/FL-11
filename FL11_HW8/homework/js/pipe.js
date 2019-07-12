function addOne(x) {
  return x + 1;
}
function pipe() {
  for (let i = 1; i < arguments.length; i++) {
    const functionIncome = arguments[i - 1];
    arguments[i] = addOne(functionIncome);
  }
  return arguments[arguments.length - 1];
}
console.log(pipe(3, addOne));
console.log(pipe(3, addOne, addOne, addOne, addOne, addOne, addOne));