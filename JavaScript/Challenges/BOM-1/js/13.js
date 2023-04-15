let lis = document.querySelectorAll("li");
let exp = document.querySelector(".experiment");



if (window.localStorage.color) {
  exp.style.backgroundColor = window.localStorage.color;
  lis.forEach((li) => {
    li.classList.remove("active");
  })
  document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active");
} else {
  console.log("not")
}



// console.log(lis)

lis.forEach((li) => {
  li.onclick = function (e) {
    // console.log(e.currentTarget.dataset.color)
    window.localStorage.setItem("color", e.currentTarget.dataset.color)
    lis.forEach((li) => {
      li.classList.remove("active")
    })
    lis.forEach((li) => {
      e.currentTarget.classList.add("active")
    })
    exp.style.backgroundColor = window.localStorage.color;
  }
});