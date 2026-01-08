const dice = document.getElementById("diceImg");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.onclick = function () {
  dice.classList.add("roll");

  setTimeout(() => {
    let num = Math.floor(Math.random() * 6) + 1;
    dice.src = "images/dice" + num + ".png";
    msg.innerText = "You got: " + num;
    dice.classList.remove("roll");
  }, 400);
};
