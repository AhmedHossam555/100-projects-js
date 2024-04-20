const ElContainer = document.querySelector(".container");
function generateElement(){
    for(let i = 0; i < 30; i++){
        const div = document.createElement("div");
        div.classList.add("container-color");
        ElContainer.appendChild(div);
        const newColor = "#"+RandomColor();
        div.style.backgroundColor = newColor;
        div.innerHTML = newColor;
    }
}
generateElement();
function RandomColor(){
    const char = "0123456789abcdef";
    let color = "";
    for(let i = 0; i < 6; i++){
        const random = Math.floor(Math.random() * char.length);
        color+=char.substring(random,random+1)
    }
    return color;
}
