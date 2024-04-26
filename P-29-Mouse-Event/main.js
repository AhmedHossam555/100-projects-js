const countX = document.querySelector(".count-x");
const countY = document.querySelector(".count-y")
window.addEventListener("mouseover",(e)=>{
    countX.innerText = e.clientX;
    countY.innerText = e.clientY;
})