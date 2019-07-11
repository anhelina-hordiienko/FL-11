function getMin() {
  let smalestValue = arguments[0];
  for(let i = 0; i < arguments.length; i++ ) {
    if (arguments[i] < smalestValue) {
      smalestValue = arguments[i];
    }
  }
  return smalestValue;
}
console.log(getMin(2, -5, 0, -30));

// const getMin = () => Math.min(...arguments) // another easier and shorter way