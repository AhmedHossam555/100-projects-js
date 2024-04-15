const btn = document.querySelector(".button");
btn.onclick = ()=>{
    let randnum= Math.floor(Math.random()*10);
    for(let i = 0; i < randnum; i++){
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        div.appendChild(img);
        document.querySelector(".container").appendChild(div);
    }
}