const buttons = document.querySelector(".button");

buttons.addEventListener("mousemove",(e)=>{
    const y = (e.pageY - buttons.offsetTop);
    const x = (e.pageX - buttons.offsetLeft);
    buttons.style.setProperty("--xpos",x + "px");
    buttons.style.setProperty("--ypos",y + "px");
});
