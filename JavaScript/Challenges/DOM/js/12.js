

// Body Style
document.body.style.cssText = "margin: 0; background-color: rgb(236,236,236); font-family: Tahoma, Arial;";


// Add Header
let header = document.createElement("header");
header.className = "website-head";
document.body.appendChild(header);

// Header Style
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center;";

// Add Logo
let logo = document.createElement("div");
logo.className = "Website Logo";
let logoContent = document.createTextNode("Elzero");
logo.appendChild(logoContent);
header.appendChild(logo);

// Logo Style
logo.style.cssText = "font-wight: bold; color: rgb(35,169,110); font-size:26px;";


// Add Nav
let nav = document.createElement("ul");
nav.className = "menu";
header.appendChild(nav)

// Nav Style
nav.style.cssText = "padding: 0px; margin: 0px; display: flex; gap: 10px; list-style: none;"


// Add Li's
let liOne = document.createElement("li");
liOne.className = "link";
let liOneContent = document.createTextNode("Home");
liOne.appendChild(liOneContent);
let liTwo = document.createElement("li");
liTwo.className = "link";
let liTwoContent = document.createTextNode("About");
liTwo.appendChild(liTwoContent);
let liThree = document.createElement("li");
liThree.className = "link";
let liThreeContent = document.createTextNode("Service");
liThree.appendChild(liThreeContent);
let liFour = document.createElement("li");
liFour.className = "link";
let liFourContent = document.createTextNode("Contact");
liFour.appendChild(liFourContent);
nav.appendChild(liOne);
nav.appendChild(liTwo);
nav.appendChild(liThree);
nav.appendChild(liFour);

// Li's Style
let link = document.querySelectorAll(".link");
for (let i = 0; i < link.length; i++) {
  link[i].style.cssText = "color: rgb(136,136,136);"
}

// Add Content Section
let content = document.createElement("div");
content.className = "content";
document.body.appendChild(content);

// Content Style
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;"


// Add Product
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";

  // Add Span
  let span = document.createElement("span");
  let spanText = document.createTextNode(`${i + 1}`);
  span.appendChild(spanText);
  product.appendChild(span)
  // Add Pruduct Text
  let productText = document.createTextNode("Product")
  product.appendChild(productText)
  content.appendChild(product)

  // Product Style
  let prodStyle = document.querySelectorAll(".product");
  prodStyle[i].style.cssText = "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;"

  // Span style
  let spanStyle = document.querySelectorAll("span");
  spanStyle[i].style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;"
}

// Add Footer
let footer = document.createElement("footer");
footer.className = "footer"
let footerContent = document.createTextNode("Copyright 2021");
footer.appendChild(footerContent);
document.body.appendChild(footer);


// Footer Style
footer.style.cssText = "background-color:  rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);"
