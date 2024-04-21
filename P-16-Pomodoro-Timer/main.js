const start = document.querySelector(".start");
const stoping = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
let timeLeft = 1500;
let interval;
function updateTime(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let foramt = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timer.innerHTML = foramt;
}
function starts(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTime();
        if(timeLeft == 0){
            clearInterval(interval);
            timeLeft = 1500;
        }
    },1000);
}
function resets(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTime();
}
function stops(){
    clearInterval(interval)
}
start.addEventListener("click",starts);
reset.addEventListener("click",resets);
stoping.addEventListener("click",stops);