
const conEl = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseover",()=>{
    conEl.classList.add("active-left");
});
left.addEventListener("mouseleave",()=>{
    conEl.classList.remove("active-left");
});
right.addEventListener("mouseenter",()=>{
    conEl.classList.add("active-right");
});
right.addEventListener("mouseleave",()=>{
    conEl.classList.remove("active-right")
})