const container = document.querySelector(".container-image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let x = 0;
prev.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(id)
    updateGallery();
});
next.addEventListener("click",()=>{
    x = x - 45;
    updateGallery();
});
function updateGallery(){
    container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    id = setTimeout(()=>{
        x = x - 45; 
        updateGallery();
    },4000)
}
updateGallery();