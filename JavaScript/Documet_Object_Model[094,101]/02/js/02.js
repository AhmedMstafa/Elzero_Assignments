let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element");
let classList = document.querySelector(".classes-list").lastElementChild;
let last = document.querySelector(".assign").getElementsByTagName("div")[0]
console.log(last)


add.onblur = function () {
  if (add.value !== "") {
    let addlist = add.value.toLowerCase().split(" ");
    // console.log(addlist)
    for (let i = 0; i < addlist.length; i++) {
      current.classList.add(addlist[i])
    }
    function sort(array) {
      array.sort();
      for (let i = 0; i < array.length; i++) {
        let newSpan = document.createElement("span");
        newSpan.className = `Span${i + 1}`
        let newText = document.createTextNode(`${array[i]}`);
        newSpan.appendChild(newText);
        classList.appendChild(newSpan);
      }
    }
    sort(addlist);
    add.value = "";
  }
}
remove.onblur = function () {
  if (remove.value !== "") {
    let removelist = remove.value.toLowerCase().split(" ");
    for (let i = 0; i < removelist.length; i++) {
      current.classList.remove(removelist[i])
    }
    remove.value = "";
  }
}




// console.log(classList)
// console.log(remove)