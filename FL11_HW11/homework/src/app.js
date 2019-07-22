let rootNode = document.getElementById('root');

// Your code goes here
// Enabling add button, when input is not empty
function notEmpty(e) {
  const button = e.target.nextElementSibling;
  if(e.target.value) {
    button.classList.remove('md-inactive');
  } else {
    button.classList.add('md-inactive');
  }
}

document.getElementById('add').addEventListener('click', function(e) {
  let value = document.getElementById('item').value;
  if (value) {
    addItemToDo(value);
    document.getElementById('item').value = '';
    e.target.classList.add('md-inactive');
  } else {
    alert('Plese, enter some value in the text field.');
  }
});

//Delete <li>, when trash icon is clicked
function removeItem() {
  const item = this.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}

//Disabling checkbox on click
function disableInput() {
  this.className ='checked disabled';
}

//Add <li>, when add button is clicked
function addItemToDo(text) {
  const li = document.createElement('li');

  const label = document.createElement('label');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.addEventListener('click', disableInput);
  const span = document.createElement('span');
  span.innerText = text;
  label.appendChild(input);
  label.appendChild(span);


  const edit = document.createElement('i');
  edit.classList.add('material-icons');
  edit.innerText = 'edit';

  const trash = document.createElement('i');
  trash.className = 'material-icons trash';
  trash.innerText = 'delete';
  trash.addEventListener('click', removeItem);

  li.appendChild(label);
  li.appendChild(edit);
  li.appendChild(trash);
  document.querySelector('ul').appendChild(li);
}