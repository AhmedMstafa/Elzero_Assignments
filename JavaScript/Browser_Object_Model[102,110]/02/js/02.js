window.setTimeout(popUp, 2000)

function popUp() {
  let pop = document.createElement("div");
  document.body.appendChild(pop)


  let popText = document.createTextNode("Welcome To Elzero Web School");

  let p = document.createElement("p");
  let pText = document.createTextNode("Welcome")

  let span = document.createElement("span");
  let spanText = document.createTextNode("x");
  span.appendChild(spanText);


  pop.appendChild(p)
  pop.appendChild(popText)
  p.appendChild(pText)
  p.appendChild(span)

  pop.style.cssText = "font-family: sans-serif; background-color: #eee; width: 400px; margin:50px auto; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 50px; position: relative";

  p.style.cssText = "font-weight: bold ;font-size: 20px"

  span.style.cssText = "font-size: 14px; background-color: red; display: block; width: 30px; height: 30px;border-radius: 50%; display: flex; align-items: center; justify-content:center; color: #fff; position: absolute; right: -10px; top: -10px; cursor: pointer";


  span.onclick = function () {
    pop.style.display = "none"
  }
}