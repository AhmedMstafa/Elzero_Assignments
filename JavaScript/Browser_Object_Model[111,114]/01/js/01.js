let fontsOpt = document.querySelectorAll("#fonts option")
let colorsOpt = document.querySelectorAll("#colors option")
let fontSizeOpt = document.querySelectorAll("#font-size option")

// window.localStorage.clear()

let fonts = document.querySelector("#fonts")
let colors = document.querySelector("#colors")
let fontSize = document.querySelector("#font-size")





console.log(document.querySelector(`[value='${window.localStorage.fonts}']`))


if (window.localStorage.getItem("fonts")) {
  fontsOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  document.body.style.fontFamily = window.localStorage.fonts
  document.querySelector(`[value='${window.localStorage.fonts}']`).setAttribute("selected", "")
} else {
  document.body.style.fontFamily = fonts.value
}

if (window.localStorage.getItem("colors")) {
  colorsOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  document.body.style.color = window.localStorage.colors
  document.querySelector(`[value='${window.localStorage.colors}']`).setAttribute("selected", "")
} else {
  document.body.style.color = colors.value
}

if (window.localStorage.getItem("fontSize")) {
  fontSizeOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  document.body.style.fontSize = window.localStorage.fontSize
  document.querySelector(`[value='${window.localStorage.fontSize}']`).setAttribute("selected", "")
} else {
  document.body.style.fontSize = fontSize.value
}

// window.localStorage.clear()

fonts.addEventListener('change', (event) => {
  fontsOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  window.localStorage.fonts = event.target.value;
  document.body.style.fontFamily = window.localStorage.fonts
  document.querySelector(`[value='${window.localStorage.fonts}']`).setAttribute("selected", "")

});
colors.addEventListener('change', (event) => {
  colorsOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  // console.log(event.target)
  window.localStorage.colors = event.target.value;
  document.body.style.color = window.localStorage.colors
  document.querySelector(`[value='${window.localStorage.colors}']`).setAttribute("selected", "")
});
fontSize.addEventListener('change', (event) => {
  fontSizeOpt.forEach((opt) => {
    opt.removeAttribute("selected")
  })
  // console.log(event.target)
  window.localStorage.fontSize = event.target.value;
  document.body.style.fontSize = window.localStorage.fontSize
  document.querySelector(`[value='${window.localStorage.fontSize}']`).setAttribute("selected", "")
});












