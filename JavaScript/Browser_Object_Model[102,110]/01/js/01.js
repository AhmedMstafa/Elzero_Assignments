let numbers = "";
let userInput = "";

function parseNumbers(unseInput) {
  let numbers = unseInput.split("-").filter((e) => !isNaN(parseInt(e)));
  return numbers.length === 2 ? numbers : [];
}

function readNumbes() {
  let isValidInput = true;
  let message = "Print Number From T0";

  do {
    if (!isValidInput) {
      message = "Invalid Inputs Please Enter Two Numbers (From-T0) !";
    }
    userInput = prompt(message, "0-20");
    if (!userInput) return false;
    numbers = parseNumbers(userInput);
    isValidInput = numbers.length === 2;
  } while (!isValidInput);
  return true;
}

function createNumberNode(number) {
  let numberNode = document.createElement("div");
  numberNode.innerHTML = number;
  return numberNode;
}

function pritnNumbers(numbers) {
  document.body.appendChild(
    createNumberNode(`${numbers[0]}-${numbers[1]}<hr>`)
  );
  for (let i = +numbers[0]; i <= +numbers[1]; i++) {
    document.body.appendChild(createNumberNode(i));
  }
}

function app() {
  if (readNumbes()) {
    numbers = parseNumbers(userInput);
    pritnNumbers(numbers);
  }
}

app();
