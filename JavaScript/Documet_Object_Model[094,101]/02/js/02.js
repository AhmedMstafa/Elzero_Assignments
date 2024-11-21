const classesToAdd = document.querySelector(".classes-to-add");
const calssesToRemove = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector("[title='Current']");
const List = document.querySelector(".classes-list div");

function showClasses() {
  List.innerHTML = "";
  currentElement.classList.value
    .split(" ")
    .sort()
    .filter((e) => e.trim() !== "")
    .forEach((e) => {
      let element = document.createElement("span");
      element.innerHTML = e;
      List.appendChild(element);
    });
  if (List.innerHTML.trim() === "") List.innerHTML = "No Classes To Show";
}

function addClass(element) {
  if (element.value.trim() === "") return false;

  let classes = element.value.toLowerCase();
  classes = classes
    .split(" ")
    .filter((e) => !currentElement.classList.contains(e) && e !== "")
    .forEach((e) => currentElement.classList.add(e));

  element.value = "";

  return true;
}

function removeClass(element) {
  if (element.value.trim() === "") return false;

  let classes = element.value.toLowerCase();
  classes = classes
    .split(" ")
    .filter((e) => currentElement.classList.contains(e))
    .forEach((e) => currentElement.classList.remove(e));

  element.value = "";

  return true;
}

showClasses();

classesToAdd.addEventListener("blur", (event) => {
  if (addClass(event.target)) {
    showClasses();
  }
});

calssesToRemove.addEventListener("blur", (event) => {
  if (removeClass(event.target)) {
    showClasses();
  }
});
