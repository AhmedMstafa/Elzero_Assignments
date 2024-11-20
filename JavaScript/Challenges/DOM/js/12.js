function createLogo() {
  let logo = document.createElement("div");
  logo.innerHTML = `Elzero`;
  logo.style.cssText =
    "color:green;margin-left: 20px;font-weight:bold;font-size: 2rem";
  return logo;
}

function createNavBar() {
  let nav = document.createElement("ul");
  let home = document.createElement("li");
  let about = document.createElement("li");
  let service = document.createElement("li");
  let contact = document.createElement("li");
  home.innerHTML = "Home";
  about.innerHTML = "About";
  service.innerHTML = "Service";
  contact.innerHTML = "Contact";
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(service);
  nav.appendChild(contact);
  nav.style.cssText =
    "list-style:none;display:flex;gap:20px;margin-right:20px;color:#999;font-weight:bold";
  return nav;
}

function createHeader() {
  let header = document.createElement("header");
  header.appendChild(createLogo());
  header.appendChild(createNavBar());
  header.style.cssText =
    "display:flex;align-items:center;justify-content:space-between;\
    height:80px;background-color:#fff";
  return header;
}

function createProduct(number = 0) {
  let product = document.createElement("div");
  let productNumber = document.createElement("span");
  productNumber.innerHTML = number;
  product.appendChild(productNumber);
  product.append("Product");
  product.style.cssText =
    "display:flex;flex-direction:column;align-items:center;justify-content:center;\
    width:calc((100% / 3) - 20px);height:200px;background-color:white;color:#999";
  productNumber.style.cssText = "font-size:40px;font-weight:bold;color:#000";
  return product;
}

function createSection() {
  let section = document.createElement("section");
  section.style.cssText =
    "display:flex;justify-content:center;flex-wrap:wrap;gap: 20px;background-color:#eee;padding: 15px 0";
  for (let i = 1; i <= 30; i++) {
    section.appendChild(createProduct(i));
  }

  return section;
}

function createFooter() {
  let footer = document.createElement("footer");
  footer.innerHTML = `Copyright 2024`;
  footer.style.cssText =
    "background-color:green;color:#fff;display:flex;justify-content:center;\
    align-items:center;height: 100px;font-size: 2rem";
  return footer;
}

let createSignature = () => {
  let signature = document.createElement("meta");
  signature.name = `author`;
  signature.content = `Ahmed Mostafa`;
  console.log(signature);
  return signature;
};

document.body.appendChild(createHeader());
document.body.appendChild(createSection());
document.body.appendChild(createFooter());
document.head.appendChild(createSignature());
document.body.style.cssText =
  "margin: 0;box-sizing:border-box;font-family: sans-serif";
