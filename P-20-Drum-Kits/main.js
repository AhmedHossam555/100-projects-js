const boxs = document.querySelector(".boxs");
const sound = ['crach','kick','snare','tom'];

sound.forEach((kit)=>{
    const divEl = document.createElement("div");
    divEl.className = "box";
    divEl.innerText = kit;
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/"+ kit + ".mp3";
    divEl.addEventListener("click",()=>{
        audioEl.play();
    })
    divEl.appendChild(audioEl);
    boxs.appendChild(divEl);
    divEl.style.backgroundImage = "url("+kit+".jpeg)";
    window.addEventListener("keydown",(event)=>{
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            divEl.style.transform = `scale(0.9)`;
        }
        setTimeout(() => {
            divEl.style.transform = `scale(1)`;
        }, 100);
    });
   
  
})
