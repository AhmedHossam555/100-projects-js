
/*
document.querySelector(".container").addEventListener("mousemove",()=>{
    if(amount.value !="" && interest.value !="" && month.value !=""){
        const calc = calculatePay();
        pay.innerHTML = calc;
    }else{
        pay.innerHTML = "";
    }
})*/
function calculatePay(){
    amount = document.getElementById("amount").value;
    interest = document.getElementById("interest").value;
    month = document.getElementById("month").value;
    pay = document.querySelector(".pay");
    interestmoney = (amount * (interest * 0.01))/ month;
    monthlypay = amount / (month + interestmoney);
    pay.innerHTML = monthlypay;
}
