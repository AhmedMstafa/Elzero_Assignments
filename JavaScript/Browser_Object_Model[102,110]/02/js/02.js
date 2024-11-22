function createPopupNode() {
  let popup = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  popup.classList.add("popup");
  btn.classList.add("delete");
  h2.textContent = "Welcom";
  p.textContent = "Welcom To Elzero Web School";
  btn.textContent = "x";
  popup.appendChild(h2);
  popup.appendChild(p);
  popup.appendChild(btn);
  popup.style.cssText = `font-family: sans-serif;position:relative;margin: 50% auto;
  width: 500px;display:flex;flex-direction:column;align-items:center;justify-content:center;
  background-color:#eee;padding: 30px;transform:translateY(-50%);`;
  btn.style.cssText = `position: absolute;width: 30px;height: 30px;top: -10px;right: -10px;
  border-radius: 50%;border:none;background-color:red;color:white;font-weight:bold;
  font-size: 15px;cursor:pointer;`;
  return popup;
}

setTimeout(() => {
  document.body.appendChild(createPopupNode());
}, 5000);

document.addEventListener("click", (e) => {
  if (e.target.classList.value === "delete") {
    e.target.parentElement.remove();
  }
});
