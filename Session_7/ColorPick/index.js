// const main = document.getElementsByTagName("main");
const colors = document.getElementById("colors");

colors.addEventListener("click", (e) => {
  const selected = document.getElementById("selected");
  selected.style.backgroundColor = e.target.id;
  selected.textContent = "Selected Color: " + e.target.textContent;
});
