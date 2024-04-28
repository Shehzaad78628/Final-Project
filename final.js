let todos = [];
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;
        if (todo.complete) {
            todoItem.style.textDecoration = 'line-through';
        }
        const checkBtn = document.createElement('span');
        checkBtn.textContent = '✓';
        checkBtn.classList.add('check-btn');
        checkBtn.addEventListener('click', () => {
            toggleComplete(index);
        });

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '✕';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteTodo(index);
        });

        todoItem.appendChild(checkBtn);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
    });
}
function addTodo(text) {
    todos.push({ text, complete: false });
    renderTodos();
}
function toggleComplete(index) {
    todos[index].complete = !todos[index].complete;
    renderTodos();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = '';
    }
});
renderTodos();
