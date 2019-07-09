const email = prompt('Please enter your email.');
let password;
const minEmailLength = 6;

if (!email) {
  alert('Canceled.');
} else if (email.length < minEmailLength) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('Please enter your password.');
  if (!password) {
    alert('Canceled.');
  } else if (email === 'user@gmail.com' && password !== 'UserPass') {
    alert('Wrong password.');
  } else if (email === 'admin@gmail.com' && password !== 'AdminPass') {
    alert('Wrong password.');
  } else {
    let isPassReset = confirm('Do you want to change your password?');
    if (!isPassReset) {
      alert('You have failed the change.')
    } else {
      const oldPass = prompt('Please enter your current password.');
      if (!oldPass) {
        alert('Canceled.');
      } else if (email === 'user@gmail.com' && oldPass !== 'UserPass') {
        alert('Wrong password.');
      } else if (email === 'admin@gmail.com' && oldPass !== 'AdminPass') {
        alert('Wrong password.');
      } else {
        const newPass = prompt('Please enter a new password.');
        const minPassLength = 5;
        if (newPass.length < minPassLength) {
          alert('It\'s too short password. Sorry.');
        } else {
          const newPassRepeat = prompt('Please enter your new password again.');
          if (newPassRepeat !== newPass) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  }
} else {
  alert('I don\'t know you.');
}