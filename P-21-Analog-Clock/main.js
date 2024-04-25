const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
function updateTime(){
    const currentDate = new Date();
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
    const hdeg = (h / 12) * 360;
    hour.style.transform = `rotate(${hdeg}deg)`;
    const mdeg = (m / 60) * 360;
    minute.style.transform = `rotate(${mdeg}deg)`;
    const sdeg = (s / 60) * 360;
    second.style.transform = `rotate(${sdeg}deg)`;
    setTimeout(updateTime,1000)
}
updateTime()