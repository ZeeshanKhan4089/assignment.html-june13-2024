let bulb = document.querySelector("div");
let section = document.querySelector("section");
let toggle = document.querySelector("#toggle");

// let on = document.querySelector("#On");
// let of = document.qurrySelector("#Off");

// function turnOn() {
//   bulb.classList.add("on");
//   bulb.classList.remove("off");
//   section.innerText = "On";
// }

// function turnOff() {
//   bulb.classList.add("off");
//   bulb.classList.remove("on");
//   section.innerText = "Off";
// }

count = 1;

function clickey() {
  bulb.classList.toggle("off");
  bulb.classList.toggle("on");
  if (count % 2 == 0) {
    toggle.innerText("On");
  } else {
    toggle.innerText("Off");
  }
  count++;
}
