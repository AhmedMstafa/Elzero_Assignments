function createCounterDiv(from) {
  let elemnet = document.createElement("div");
  elemnet.id = "counter";
  elemnet.textContent = from;
  return elemnet;
}

function startCountDown(speed, order) {
  const elemnet = document.getElementById("counter");
  let number = +elemnet.innerHTML;
  const intervalId = setInterval(() => {
    if (!number) {
      order();
      clearInterval(intervalId);
    }
    elemnet.innerHTML = number--;
  }, speed);
}

function counter(from, speed, order) {
  document.body.appendChild(createCounterDiv(from));
  startCountDown(speed, order);
}

function openPopupElzeroWebScool() {
  let page = window.open(
    `https://elzero.org/`,
    `_blanck`,
    `left=100,top=100,width=320,height=320`
  );
  page.focus();
}

counter(5, 1000, openPopupElzeroWebScool);
