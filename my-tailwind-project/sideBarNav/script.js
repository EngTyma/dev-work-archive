const active = document.getElementById("active");
const aside = document.querySelector(".aside");
active.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});
