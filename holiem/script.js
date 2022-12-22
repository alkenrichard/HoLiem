const toggle = document.getElementById("toggle");
const body = document.getElementById("light");
const line = document.getElementById("line");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const ball = document.getElementById("ball");
const pattern = document.getElementById("pattern");
const background = document.getElementById("background");
const icon = document.getElementById("icon");
const color = document.getElementById("color");
const border1 = document.getElementById("border1");
const border2 = document.getElementById("border2");
const container = document.getElementById("container");
const advantage = document.getElementById("advantage");
const sunimg = document.getElementById("sun2");
const moonimg = document.getElementById("moon2");
const portfolio = document.getElementById("portfolio");
const coverimg = document.getElementById("coverimg");
const description = document.getElementById("description");
const right = document.getElementById("rightside");
const input = document.getElementById("my-form");

toggle.addEventListener("click", function () {
  body.classList.toggle("dark");
  pattern.classList.toggle("pattern1D");
  line.classList.toggle("lineD");
  moon.classList.toggle("bxs-moon");
  ball.classList.toggle("ballD");
  background.classList.toggle("backgroundD");
  icon.classList.toggle("iconD");
  color.classList.toggle("colorD");
  border1.classList.toggle("border1D");
  border2.classList.toggle("border2D");
  advantage.classList.toggle("advantageD");
  container.classList.toggle("containerD");
  sun.classList.toggle("bx-sun");
  sun.classList.toggle("bxs-sun");
  sunimg.classList.toggle("sunD");
  moonimg.classList.toggle("moonD");
  portfolio.classList.toggle("portfolioD");
  coverimg.classList.toggle("coverdark");
  description.classList.toggle("descriptionD");
  right.classList.toggle("rightD");
  input.classList.toggle("inputD");
});
