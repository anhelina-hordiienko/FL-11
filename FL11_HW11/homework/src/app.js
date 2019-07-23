let rootNode = document.getElementById('root');

const arrowOfLi = document.getElementsByTagName('li');
const notification = document.createElement('p');
notification.innerText = 'Maximum item per list are created';
const header = document.getElementsByTagName('h1')[0];
const itemsLimit = 10;
//Chek if maximum items per list are created
function blockAddingItemToList() {
  if(arrowOfLi.length === itemsLimit) {
    notification.classList.add('notification');
    header.parentNode.insertBefore(notification, header.nextElementSibling);
    document.getElementById('item').setAttribute('disabled', 'disabled');
    document.getElementById('add').style.pointerEvents = 'none';
  }
}

function unblockAddingItemToList() {
  if(arrowOfLi.length < itemsLimit) {
    notification.remove();
    document.getElementById('item').removeAttribute('disabled');
    document.getElementById('add').style.removeProperty('pointer-events');
  }
}

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
    blockAddingItemToList();
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

//Edit task
function editTask() {
  const pencil = this;
  const li = this.parentNode;
  const label = li.firstChild;
  const trash = this.nextElementSibling;
  trash.style.display = 'none';

  const save = document.createElement('i');
  save.classList.add('material-icons');
  save.innerText = 'save';
  li.replaceChild(save, this);

  const editField = document.createElement('input');
  editField.setAttribute('type', 'text');
  editField.setAttribute('id', 'editField');
  const taskValueBeforeEdit = label.lastChild.innerText;
  editField.setAttribute('value', taskValueBeforeEdit);
  li.replaceChild(editField, label);
  
  save.addEventListener('click', function() {
    let taskValueAfterEdit = editField.value;
    if(taskValueAfterEdit) {
      trash.style.display = 'inline-block';
      li.replaceChild(pencil, save);
      label.lastChild.innerText = taskValueAfterEdit;
      li.replaceChild(label, editField);
    } else {
      alert('Plese, enter some value in the text field.');
    }
  });
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
  edit.addEventListener('click', editTask);

  const trash = document.createElement('i');
  trash.className = 'material-icons trash';
  trash.innerText = 'delete';
  trash.addEventListener('click', removeItem);
  trash.addEventListener('click', unblockAddingItemToList);

  li.appendChild(label);
  li.appendChild(edit);
  li.appendChild(trash);
  document.querySelector('ul').appendChild(li);
}