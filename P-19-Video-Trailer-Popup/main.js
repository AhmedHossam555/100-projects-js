const button = document.querySelector(".btn");
button.addEventListener("click",()=>{
    const popupEl = document.createElement("div");
    popupEl.classList.add("pop");
    document.body.appendChild(popupEl);
    const close = document.createElement("span");
    const text = document.createTextNode("x");
    close.append(text);
    close.className = "closed";
    popupEl.appendChild(close);
    const videoEl = document.createElement("video");
    videoEl.src="video.mp4";
    videoEl.className = "video";
    videoEl.controls = true;
    popupEl.appendChild(videoEl);
    
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("closed")){
        e.target.parentElement.remove()
    }
})
