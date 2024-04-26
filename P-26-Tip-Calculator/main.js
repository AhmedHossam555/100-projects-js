const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.querySelector("button");
const total = document.querySelector(".total span")
btn.addEventListener("click",calculateTotal);
function calculateTotal(){
    const billvalue = +bill.value;
    const tipvalue = +tip.value;
    const totalvalue = billvalue * (1 + (tipvalue / 100));
    total.innerHTML = `$${totalvalue.toFixed(2)}`;
}