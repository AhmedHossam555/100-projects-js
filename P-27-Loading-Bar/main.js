const loadbar = document.querySelector("div span");
const counter = document.querySelector("p");
let index = 0;
function updateind(){
    loadbar.style.width = index+"%";
    counter.innerText = index+"%";
    index++;
    if(index < 101){
        setTimeout(updateind,20);
    }  
}
updateind();