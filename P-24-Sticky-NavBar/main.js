const section = document.querySelector(".section");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
window.onscroll = function(){
    if(window.scrollY > section.offsetTop - 100 ){
        nav.style.backgroundColor = "#000";
        ul.style.color = "#fff";
    }else{
        nav.style.backgroundColor = "#fff";
        ul.style.color = "#000";
    }
}