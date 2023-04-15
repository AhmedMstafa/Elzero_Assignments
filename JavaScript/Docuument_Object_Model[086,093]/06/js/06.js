



let number = document.querySelector("[type='number']");
let text = document.querySelector("[type='text']");
let option = document.querySelector("select");
let element = document.getElementsByClassName("box")




document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  for (let i = 0; i < (element.length); i++) {
    console.log(element.length)
    element[i].style.display = "none"
  }
  for (let i = 0; i < number.value; i++) {
    let newText = document.createTextNode(text.value);
    let newChild = document.createElement(option.value);
    newChild.appendChild(newText);
    newChild.className = "box"
    newChild.title = "Element"
    newChild.id = `id-${i}`
    // newChild.style.backgroundColor = `#f${33 + (i + i)}`
    document.body.appendChild(newChild);
  }
  number.value = ""
  text.value = ""
}
console.log(element)