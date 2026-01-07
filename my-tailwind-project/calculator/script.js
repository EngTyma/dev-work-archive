const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
/* marka hore waxan looping ku samenaya dhaman buttons ka si midba mar laygu so aqriya */
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    /* button kasta aan click dhaha kasa extra white space ka wuu wato */
    const value = btn.textContent.trim();

    /* waxan ka bilawaya qoralka laso print grayey ina iska clean garena */

    if (value === "AC" || value === "Ac") {
      result.value = "";
      return;
    }

    /* hadi buttonka la tabtay uu la mid yahay = qabo shaqadan */

    if (value === "=") {
      try {
        /* result .value == waxa waye buttonki la tabtay ee shashada imid  */

        result.value = eval(result.value);
      } catch {
        result.value = "Error";
      }
      return;
    }
    result.value += value;
  });
});

