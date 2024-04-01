const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    li.classList.toggle('completed', checkbox.checked);
  });
  
  li.appendChild(checkbox);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
