function createCounterDiv(from) {
  let elemnet = document.createElement("div");
  elemnet.id = "counter";
  elemnet.textContent = from;
  return elemnet;
}

function startCountDown(speed) {
  const elemnet = document.getElementById("counter");
  let number = +elemnet.innerHTML;
  const intervalId = setInterval(() => {
    if (!number) clearInterval(intervalId);
    elemnet.innerHTML = number--;
  }, speed);
}

function counter(from, speed) {
  document.body.appendChild(createCounterDiv(from));
  startCountDown(speed);
}

counter(200000, 1);
