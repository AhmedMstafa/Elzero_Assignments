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

function goToElzeroWebSite() {
  window.location.href = `https://elzero.org/`;
}

counter(5, 1000, goToElzeroWebSite);
