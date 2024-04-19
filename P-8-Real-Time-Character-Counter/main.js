
let input = document.querySelector(".input");
let count = document.querySelector(".count");
let total = document.querySelector(".total-count");
/*
const id = setInterval(()=>{
    count.innerHTML = input.value.length;
    total.innerHTML = 50 - input.value.length;
})
*/
input.addEventListener("keyup",()=>{
    updateCount();
});
function updateCount(){
    count.innerHTML = input.value.length;
    total.innerHTML = input.getAttribute("maxlength") - input.value.length;
}
