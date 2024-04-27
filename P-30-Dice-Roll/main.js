const codes = ["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"];
const dice = document.querySelector(".dice");
const btn_dice = document.querySelector(".btn-dice");
const historys = document.querySelector(".history");
let index = 0;
btn_dice.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random()*codes.length);
    dice.innerHTML = codes[randomNumber];
    dice.classList.add("animation-dice");
    setTimeout(()=>{
        dice.classList.remove("animation-dice");
    },1000);
    index++;
    historys.innerHTML = "";
    for(let i = 0; i < index; i++){
        const li = document.createElement("li");
        li.innerHTML = `Roll ${i+1} <span>${codes[randomNumber]}</span>`;
        historys.appendChild(li);
    }
});
