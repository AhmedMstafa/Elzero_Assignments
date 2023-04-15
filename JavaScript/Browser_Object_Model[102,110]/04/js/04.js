let div = document.createElement("div");
let divText = document.createTextNode("10");
div.appendChild(divText)
document.body.appendChild(div)


let counter = setInterval(() => {
  if (div.innerHTML >= 1) {
    div.innerHTML -= 1
  } else {
    location.href = "https://elzero.org"
    clearTimeout(counter);
  }
}, 1000);

