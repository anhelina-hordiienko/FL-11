let a = Number(prompt('Please enter the positive number for triangle first side (a). Use point if entering decimal'));
let b = Number(prompt('Please enter the positive number for triangle second side (b). Use point if entering decimal'));
let c = Number(prompt('Please enter the positive number for triangle third side (c). Use point if entering decimal'));

if (!a || !b || !c || a < 0 || b < 0 || c < 0 || a > b + c || b > a + c || c > a + b) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Eequivalent triangle');
} else if (a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}