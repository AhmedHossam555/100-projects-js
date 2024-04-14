const Elbody = document.querySelector("body");
Elbody.addEventListener("mousemove",(e)=>{
    const spacex = e.offsetX;
    const spacey = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = spacex + 'px';
    spanEl.style.top = spacey + 'px';
    const size = Math.random() * 100;
    spanEl.style.width = size + 'px';
    spanEl.style.height = size + 'px';
    Elbody.append(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000)
})