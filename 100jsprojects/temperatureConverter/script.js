const enterTemparture = document.getElementById("enterTemparture"),
  Fahrenheit = document.getElementById("Fahrenheit"),
  Kelvin = document.getElementById("Kelvin");
enterTemparture.addEventListener("input", () => {
  // /* 🔥 1. Celsius → Kelvin */
  const c = parseFloat(enterTemparture.value);
  if (isNaN(c)) {
    Fahrenheit.value = "";
    Kelvin.value = "";
    return;
  }
  Kelvin.value = c + 273.15;
  // 🔥 2. Celsius → Fahrenheit
  Fahrenheit.value = (c * 9) / 5 + 32;
});
