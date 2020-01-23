class UI {
  constructor() {
    this.tbody = document.getElementById('todoList');
    this.dueDateInput = document.getElementById('dueDate');
    this.taskInput = document.getElementById('task');
  }

  paintTable() {
    for(let todo of Object.values(list.list)) {
      let row = document.createElement('tr');
      let deleteButton = `
      <form action="#" class="deleteForm" method="delete">
        <input type="submit" class="button button-clear" id=${todo.taskID} value="Delete Task">
      </form>
      `;

      row.innerHTML = `
      <td>${todo.task}</td>
      <td>${todo.dueDate.toLocaleString()}</td>
      <td>Complete</td>
      <td>${deleteButton}</td>
      `;
      this.tbody.appendChild(row);
    }
  }

  clearForm() {
    this.dueDateInput.value = '';
    this.taskInput.value = '';
  }

  clearTable() {
    this.tbody.innerHTML = '';
  }
}