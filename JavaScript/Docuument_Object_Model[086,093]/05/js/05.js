let img = document.images;

for (let i = 0; i < img.length; i++) {
  if (img[i].hasAttribute("alt")) {
    img[i].alt = "Old";
  } else (
    img[i].setAttribute("alt", "Elzero News")
  )
}