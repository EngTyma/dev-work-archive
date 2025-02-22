// ADD ELEMENT TO DOM

const btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.background = "#000";
btn.style.color = "#FFF";
btn.style.padding = "10px";
btn.style.margin = "10px";
btn.style.border = "1px solid #000";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

btn.addEventListener("click", function() {
    alert("Hello World");
});