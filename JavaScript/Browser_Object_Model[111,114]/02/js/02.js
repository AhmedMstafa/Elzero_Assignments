let n = document.querySelector("[type='text']")
let email = document.querySelector("[type='email']")
let select = document.querySelector("#select")
let opts = document.querySelectorAll("option")

if (window.sessionStorage.name) {
  n.value = window.sessionStorage.name

}
if (window.sessionStorage.email) {
  email.value = window.sessionStorage.email
}
n.onblur = function (e) {
  if (e !== "")
    window.sessionStorage.setItem("name", n.value)
  // n.value = ""
}
email.onblur = function (e) {
  if (e !== "")
    window.sessionStorage.setItem("email", email.value)
  // n.value = ""
}

if (window.sessionStorage.book) {
  opts.forEach(function (opt) {
    opt.removeAttribute("selected")
  })
  select.value = window.sessionStorage.book
  document.querySelector(`[value='${window.sessionStorage.book}']`).setAttribute("selected", "")
}

select.addEventListener("change", function (e) {
  opts.forEach(function (opt) {
    opt.removeAttribute("selected")
  })
  window.sessionStorage.setItem("book", e.target.value);
  document.querySelector(`[value='${window.sessionStorage.book}']`).setAttribute("selected", "")
})