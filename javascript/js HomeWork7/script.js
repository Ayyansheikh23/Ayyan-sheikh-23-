let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearAll() {
  display.innerText = "0";
}

function del() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
