// task 0
function getNumbers(inputString) {
  const returns = [];
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
  const transformedArray = [];
  executeforEach(array, function (item) {
    transformedArray.push(callback(item));
  });
  return transformedArray;
}

//task4
function filterArray(array, callback) {
  const filteredArray = [];
  executeforEach(array, function (item) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
}

//task5
function showFormattedDate(date) {
  return `Date: ${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}`;
}

//task6 
function canConvertToDate(date) {
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
}

//task7
function daysBetween(date1, date2) {
  const millisInDay = 86400000;
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / millisInDay);
}

//task8
function getAmountOfAdultPeople(data) {
  const daysOfEighteenYears = 6570;
  const adults = filterArray(data, (person) => {
    return daysBetween(new Date(person[' birthday ']), new Date()) > daysOfEighteenYears;
  });
  return adults.length;
}

//task9
function keys(object) {
  const keysArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keysArray.push(key);
    }
  }
  return keysArray;
}

//task10
function values(object) {
  const valuesArray = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      valuesArray.push(object[key]);
    }
  }
  return valuesArray;
}