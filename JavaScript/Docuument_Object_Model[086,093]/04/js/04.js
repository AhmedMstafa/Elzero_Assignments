let one = document.getElementsByTagName("div")[0]
let two = document.getElementsByTagName("div")[1]


two.innerHTML = `${one.innerHTML} ${document.getElementsByTagName("div").length}`
one.innerHTML = two.title
two.title = one.title
one.title = one.innerHTML