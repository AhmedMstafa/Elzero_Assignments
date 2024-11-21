const ourElement = document.getElementsByClassName("our-element")[0];
const paragraph = document.getElementsByTagName("p")[0];

paragraph.remove();

const start = document.createElement("div");
start.classList.add("start");
start.title = "Start Element";
start.textContent = "Start";
start.setAttribute("data-value", "start");

const end = document.createElement("div");
end.classList.add("end");
end.title = "End Element";
end.textContent = "End";
end.setAttribute("data-value", "end");

ourElement.before(start);
ourElement.after(end);
