const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item shadow-sm";

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = task;

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm delete-btn";
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
