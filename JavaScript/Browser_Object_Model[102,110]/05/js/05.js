let div = document.createElement("div");
let divText = document.createTextNode("10");
div.appendChild(divText)
document.body.appendChild(div)


setTimeout(() => {
  let page = window.open("https://elzero.org", "", "width=300,height=300");
  page.focus();
}, 5000);

let counter = setInterval(() => {
  if (div.innerHTML >= 1) {
    div.innerHTML -= 1
  } else {
    clearTimeout(counter);
  }
}, 1000);