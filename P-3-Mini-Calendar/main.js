const monthName = document.querySelector(".month-name");
const dayName = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const year = document.querySelector(".year");
const months =["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekdays =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
setInterval(()=>{
    let date = new Date();
    monthName.innerHTML = date.toLocaleString("en",{
        month: 'long',
    });
    dayName.innerHTML = weekdays[date.getDay()];
    dayNumber.innerHTML = date.getDate(); 
    year.innerHTML = date.getFullYear();
})