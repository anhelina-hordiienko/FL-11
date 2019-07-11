function isInteger(number) {
  return number % parseInt(number) === 0;
}
console.log(isInteger(10.0));