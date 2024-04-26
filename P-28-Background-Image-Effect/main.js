const backImage = document.querySelector(".back-image");
window.addEventListener("scroll",()=>{
    
    backImage.style.opacity = 1 - (window.scrollY/ 800);
})