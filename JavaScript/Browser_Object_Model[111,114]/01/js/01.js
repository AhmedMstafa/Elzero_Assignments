function addFontOptoionToLocalStorage(e) {
  if (e.target.id === "font-family") {
    localStorage.setItem("fontFamily", e.target.value);
    return;
  }

  if (e.target.id === "font-color") {
    localStorage.setItem("fonColor", e.target.value);
    return;
  }

  if (e.target.id === "font-size") {
    localStorage.setItem("fontSize", e.target.value);
    return;
  }
}

function getFontOptionFromLocalStorage() {
  let options = {};
  options.fontFamily = localStorage.getItem("fontFamily");
  options.fonColor = localStorage.getItem("fonColor");
  options.fontSize = localStorage.getItem("fontSize");
  return options;
}

function addFontOptoionsToLocalStorage() {
  let selectBox = document.querySelectorAll(".select-box");
  selectBox.forEach((e) => {
    e.addEventListener("change", (e) => {
      addFontOptoionToLocalStorage(e);
      addFontStyleToPage();
    });
  });
}

function addSeletectToOption() {
  let options = document.querySelectorAll("option");
  let option = getFontOptionFromLocalStorage();
  options.forEach((e) => {
    e.removeAttribute("selected");
    if (e.value === option.fontFamily) e.setAttribute("selected", "");
    if (e.value === option.fonColor) e.setAttribute("selected", "");
    if (e.value === option.fontSize) e.setAttribute("selected", "");
  });
}

function addFontStyleToPage() {
  let select = document.querySelectorAll("select");
  select.forEach((e) => {
    if (e.id === "font-family")
      document.body.style.fontFamily = `${e.value}, serif`;
    if (e.id === "font-color") document.body.style.color = `#${e.value}`;
    if (e.id === "font-size") document.body.style.fontSize = `${e.value}px`;
  });
}

addSeletectToOption();

addFontStyleToPage();

addFontOptoionsToLocalStorage();
