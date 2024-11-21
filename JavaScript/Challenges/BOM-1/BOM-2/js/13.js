const formNodes = document.forms[0];
const input = formNodes.firstElementChild;
const btn = formNodes.lastElementChild;
const taskList = document.querySelector(".tasks");

let task = {
  id: 0,
  content: "",
  isDeleted: false,
};

function isValidInput() {
  return task.content !== "";
}

function isLocalStorageEmpty() {
  return !localStorage.length || !localStorage.getItem("tasks");
}

function getTasksFromLocalStorage() {
  if (!isLocalStorageEmpty()) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks;
  }
  return [];
}

function deleteTaskFromLocalStorage(taskId) {
  let tasks = getTasksFromLocalStorage();
  for (const task in tasks) {
    if (tasks[task].id === taskId) {
      tasks[task].isDeleted = true;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return true;
    }
  }
  return false;
}

function addTaskToLocalStorage() {
  let tasks = getTasksFromLocalStorage();
  task.id = Date.now();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskNode(id, text) {
  const taskNode = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  taskNode.classList.add("task");
  taskNode.setAttribute("data-id", id);
  taskNode.innerHTML = text;
  deleteBtn.innerHTML = "Delete";
  taskNode.appendChild(deleteBtn);
  return taskNode;
}

function addTasksToList() {
  taskList.innerHTML = "";
  let tasks = getTasksFromLocalStorage();
  tasks
    .filter((task) => !task.isDeleted)
    .forEach((task) => {
      taskList.appendChild(createTaskNode(task.id, task.content));
    });
}

function deletTaskFromList() {}

addTasksToList();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValidInput()) {
    addTaskToLocalStorage();
    addTasksToList();
    input.value = "";
    task.content = "";
  }
});

input.addEventListener("input", (e) => {
  task.content = e.target.value.trim();
});

taskList.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete")) {
    deleteTaskFromLocalStorage(+e.target.parentNode.getAttribute("data-id"));
    e.target.parentNode.remove();
  }
});
