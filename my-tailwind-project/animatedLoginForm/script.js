// SELECT ALL LABELS
const labels = document.querySelectorAll(".form-control");

labels.forEach((label) => {
  // wrap each letter inside <span>
  label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay:${index * 40}ms">${letter}</span>`;
    })
    .join("");
});
