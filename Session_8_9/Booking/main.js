function makeRequest(dataObject) {
  const data = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(dataObject),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((response) => response.json());
  return data;
}

const form = document.getElementById("booking-form");

function isInvalidName(name) {
  const invalidNames = ["Winter Soldier", "Iron Man", "Black Widow", "Loki"];

  const conf = document.getElementById("conf-btn");
  if (invalidNames.includes(name)) {
    alert("Sorry, The consultiong feature isn't available now");
    conf.disabled = true;
  } else {
    conf.disabled = false;
  }
}

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

fullName.addEventListener("blur", (e) => {
  isInvalidName(e.target.value);
  localStorage.setItem("fullName", e.target.value);
});

email.addEventListener("blur", (e) => {
  localStorage.setItem("email", e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    fullName: form.elements["fullName"].value,
    email: form.elements["email"].value,
    doctor: form.elements["doctor"].value,
    location: form.elements["location"].value,
    date: new Date(form.elements["date"].value)
  };
  console.log(data);

  makeRequest(data).then((res) => console.log(res));
  console.log("Form submitted");
});

document.addEventListener("DOMContentLoaded", (e) => {
  fullName.value = localStorage.getItem("fullName");
  email.value = localStorage.getItem("email");
});
