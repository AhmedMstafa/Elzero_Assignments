let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasKsDiv = document.querySelector(".tasks");


let arrayOfTasks = [];

getDataFromLocalStorge();

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
}

tasKsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    toggleStatusTasKWith(e.target.getAttribute("data-id"))
    e.target.classList.toggle("done")
  }
})


function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayOfTasks.push(task);
  addElementsToPageFrom(arrayOfTasks);
  addDataTolocalStorgeFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  tasKsDiv.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    // ceck if task is done
    if (task.completed) {
      div.className = "task done"
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del"
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    tasKsDiv.appendChild(div);
  });
}


function addDataTolocalStorgeFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorge() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks)
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataTolocalStorgeFrom(arrayOfTasks);
}

function toggleStatusTasKWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataTolocalStorgeFrom(arrayOfTasks)
}