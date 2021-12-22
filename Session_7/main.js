const count = () => parseInt(document.querySelector("h3").innerText, 10);

const add = () => (document.querySelector("h3").innerText = count() + 1);

const subtract = () => (document.querySelector("h3").innerText = count() - 1);

let data = {};

const fname = document.getElementById("fname");
const femail = document.getElementById("femail");
const show = document.getElementById("show");
fname.addEventListener("change", (e) => {
  data.firstName = e.target.value;
  // console.log(data.firstName);
});

femail.addEventListener("change", (e) => {
  data.email = e.target.value;
  // console.log(data.email);
});

show.addEventListener("click", (e) => {
  // console.log(data.firstName);
  // console.log(data.email);
  console.log(data);
});
