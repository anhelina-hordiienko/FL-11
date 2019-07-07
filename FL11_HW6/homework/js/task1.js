let a1 = prompt('Please enter any number to asign an abscissa of A. Use point instead of comma if entering decimal.');
let a2 = prompt('Please enter any number to asign an ordinate of A. Use point instead of comma if entering decimal.');
let b1 = prompt('Please enter any number to asign an abscissa of B. Use point instead of comma if entering decimal.');
let b2 = prompt('Please enter any number to asign an ordinate of B. Use point instead of comma if entering decimal.');
let c1 = prompt('Please enter any number to asign an abscissa of C. Use point instead of comma if entering decimal.');
let c2 = prompt('Please enter any number to asign an ordinate of C. Use point instead of comma if entering decimal.');
const devider = 2;

if (a1 && a2 && b1 && b2 && c1 && c2) {
  a1 = Number(a1);
  a2 = Number(a2);
  b1 = Number(b1);
  b2 = Number(b2);
  c1 = Number(c1);
  c2 = Number(c2);
  if (c1 === (b1 - a1) / devider + a1 && c2 === (b2 - a2) / devider + a2) {
    console.log(true);
  } else {
    console.log(false);
  }
} else if (a1 === '' || a2 === '' || b1 === '' || b2 === '' || c1 === '' || c2 === '') {
  console.log('One or more prompt fields were empty. You may try again. Remember that only numbers are allowed.');
} else if (a1 === null || a2 === null || b1 === null || b2 === null || c1 === null || c2 === null) {
  console.log('One or more prompt fields were canceled. You may try again. Remember that only numbers are allowed.');
}