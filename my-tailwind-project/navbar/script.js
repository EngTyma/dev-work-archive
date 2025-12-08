const btnActive = document.querySelector("#active");
const navbar = document.querySelector(".navbar");
btnActive.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
