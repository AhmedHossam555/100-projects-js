
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const time = document.querySelector(".time");
setInterval(()=>{
    const date = new Date();
    let hour = date.getHours();
    hour = hour < 10 ? `0${hour}`: hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? `0${minute}`: minute;
    let second = date.getSeconds();
    second = second < 10 ? `0${second}`: second;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    if(hour >= 12){
        hour = hour -12;
        time.innerHTML = `PM`;
    }else {
        time.innerHTML = `AM`;
    }
    hours.innerHTML = hour;
});