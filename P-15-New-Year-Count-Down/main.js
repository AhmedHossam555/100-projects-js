const datenewyear = new Date("Jan 1, 2025 00:00:00").getTime();
updatecountdown()
function updatecountdown(){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const datenow = new Date().getTime();
    const date = datenewyear - datenow;
    const d = Math.floor(date / day);
    const h = Math.floor((date%day) / hour);
    const m = Math.floor((date%hour)/minute);
    const s = Math.floor((date%minute)/second);
    document.querySelector(".days").innerText = d;
    document.querySelector(".hours").innerText = h;
    document.querySelector(".minutes").innerText = m < 10?`0${m}`: m;
    document.querySelector(".seconds").innerText = s < 10? `0${s}`: s;
    setTimeout(()=>{
        updatecountdown();
    },1000)
}