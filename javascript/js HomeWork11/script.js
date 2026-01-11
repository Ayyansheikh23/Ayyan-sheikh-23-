const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const deleteAllBtn = document.getElementById("deleteAll");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "todo-text";
  span.innerText = todoText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";

  editBtn.addEventListener("click", () => editTodo(span));
  deleteBtn.addEventListener("click", () => li.remove());

  actions.append(editBtn, deleteBtn);
  li.append(span, actions);
  todoList.appendChild(li);

  input.value = "";
}

function editTodo(span) {
  const newText = prompt("Edit your todo:", span.innerText);
  if (newText !== null && newText.trim() !== "") {
    span.innerText = newText.trim();
  }
}

deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all todos?")) {
    todoList.innerHTML = "";
  }
});
