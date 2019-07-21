let rootNode = document.getElementById('root');

// Your code goes here
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

function removeItem() {
  const item = this.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}

function addItemToDo(text) {
  const li = document.createElement('li');

  const label = document.createElement('label');
  label.innerHTML = '<input type="checkbox" name="affairs"></input>';
  const span = document.createElement('span');
  span.innerText = text;
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