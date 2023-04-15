let praragraph = document.getElementsByTagName("p");
praragraph[0].remove();


let element = document.getElementsByClassName("our-element");

let start = document.createElement("div");
start.className = "Start Element";
start.title = "Start";
start.setAttribute("datat-value", "Start");
let startText = document.createTextNode("Start");
start.appendChild(startText);
element[0].before(start);

let end = document.createElement("div");
end.className = "End Element";
end.title = "End";
end.setAttribute("datat-value", "End");
let endText = document.createTextNode("End");
end.appendChild(endText);
element[0].after(end);

