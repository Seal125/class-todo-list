const list = new TodoList();
const ui = new UI();
const form = document.getElementById('addTodo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = document.getElementById('task');
  const dueDate = document.getElementById('dueDate');
  list.addTodo(task.value, dueDate.value);

  ui.clearTable();
  ui.paintTable();
  ui.clearForm();
});

const deleteForms = document.getElementsByClassName('deleteForm');

for(let deleteForm of deleteForms) {
  deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    list.deleteTodo(deleteForm[0].id);
    ui.paintTable();
  });
}