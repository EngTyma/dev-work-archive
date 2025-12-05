const bill = document.getElementById("billAmount"),
    tipParc = document.getElementById("tipPercantage"),
    resultTotal = document.getElementById("resultTotal"),
    btnCal = document.getElementById("btnCal");
btnCal.addEventListener("click", () => {
    const billValue = parseFloat(bill.value),
        tipValue = parseFloat(tipParc.value);
    if (isNaN(billValue) || isNaN(tipValue)) {
        resultTotal.innerText = "enter valid value";
        return;
    }
    if (billValue < 0 || tipValue < 0) {
        resultTotal.textContent = "value can't be negative";
        return;
    }
    const totalValue = billValue * (1 + tipValue / 100);
    resultTotal.textContent = totalValue.toFixed(2);
    return;
});