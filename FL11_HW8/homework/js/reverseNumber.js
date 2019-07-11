function reverseNumber(number) {
  number = parseInt(number);
  let reverse = 0;
  while (number !== 0) {
    const reminder = number % 10;
    reverse = (reverse * 10) + reminder;
    number = parseInt(number / 10);
  }
  reverse = number < 0 ? reverse * (-1) : reverse;
  return reverse;
}
console.log(reverseNumber(567));