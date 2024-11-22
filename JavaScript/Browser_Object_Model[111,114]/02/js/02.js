const text = document.querySelector("[type='text']");
const date = document.querySelector("[type='date']");
const range = document.querySelector("[type='range']");
const select = document.querySelector(".select-box");

let userInput = {
  inputText: "",
  inputDelete: "",
  inputRange: "",
  select: "",
};

function isValidInput(input) {
  return input !== "";
}

function addInputToSessionStorage(inputDom, event, inputType, storgeName) {
  inputDom.addEventListener(event, (e) => {
    inputType = e.target.value.trim();
    if (!isValidInput(inputType)) return;
    sessionStorage.setItem(storgeName, inputType);
  });
}

function getInputFromSessionStorage(storageName) {
  return sessionStorage.getItem(storageName);
}

function App() {
  if (
    isValidInput((userInput.inputText = getInputFromSessionStorage("text")))
  ) {
    text.value = userInput.inputText;
  }
  if (
    isValidInput((userInput.inputDelete = getInputFromSessionStorage("date")))
  ) {
    date.value = userInput.inputDelete;
  }
  if (
    isValidInput((userInput.inputRange = getInputFromSessionStorage("range")))
  ) {
    range.value = userInput.inputRange;
  }
  if (isValidInput((userInput.select = getInputFromSessionStorage("select")))) {
    select.value = userInput.select;
  }

  addInputToSessionStorage(text, "blur", userInput.inputText, "text");
  addInputToSessionStorage(date, "change", userInput.inputDelete, "date");
  addInputToSessionStorage(range, "input", userInput.inputRange, "range");
  addInputToSessionStorage(select, "change", userInput.select, "select");
}

App();
