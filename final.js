var todos = [];
function renderTodos() {
  var todoList = document.getElementById("todoList");
  // Clear existing todos
  todoList.innerHTML = "";
  // Create a list item for each todo
  todos.map(function(todo) {
    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}
document.getElementById("todoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var newTodoInput = document.getElementById("newTodo");
  var newTodoValue = newTodoInput.value.trim();
  if (newTodoValue === "") {
    alert("Please enter a todo.");
    return;
  }
  todos.push(newTodoValue);
  renderTodos();
  newTodoInput.value = "";
});
renderTodos();
