
const counter = document.querySelectorAll(".counter");
let interval;
let start = false;
if(!start){
    counter.forEach((n)=>{
        increaseEle(n);
    });
}
start = true;


function increaseEle(num){
    let goals = num.dataset.goal;
    let interval = setInterval(()=>{
        num.textContent++;
        if(num.textContent === goals){
            clearInterval(interval);
        }
},2000 / goals)}