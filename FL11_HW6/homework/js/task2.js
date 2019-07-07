let a = Number(prompt('Please enter the positive number for a triangle first side (a). Use point (.) instead of comma (,) if entering decimal fractions'));
let b = Number(prompt('Please enter the positive number for the triangle second side (b). Use point (.) instead of comma (,) if entering decimal fractions'));
let c = Number(prompt('Please enter the positive number for the triangle third side (c). Use point (.) instead of comma (,) if entering decimal fractions'));
if (!a || !b || !c || a < 0 || b < 0 || c < 0 || a > b + c || b > a + c || c > a + b) {
  console.log('Triangle doesn’t exist');
} else if ( a === b && b === c) {
  console.log('Eequivalent triangle');
} else if ( a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}