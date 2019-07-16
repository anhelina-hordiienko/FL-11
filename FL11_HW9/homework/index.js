// task 0
function getNumbers(inputString) {
  let returns = [];
  for (let letter of inputString) {
    const returnsInput = parseInt(letter, 10);
    if (returnsInput) {
      returns.push(returnsInput);
    }
  }
  return returns;
}

// task 1
function findTypes() {
  let returns = {};
  for (let item of arguments) {
    const dataType = typeof item;
    if (returns.hasOwnProperty(dataType)) {
      returns[dataType] += 1;
    } else {
      returns[dataType] = 1;
    }
  }
  return returns;
}

//task2
function executeforEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

//task3
function mapArray(array, callback) {
  let transformedArray = [];
  executeforEach(array, function (item) {
    transformedArray.push(callback(item));
  });
  return transformedArray;
}

//task4
function filterArray(array, callback) {
  let filteredArray = [];
  executeforEach(array, function (item) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
}