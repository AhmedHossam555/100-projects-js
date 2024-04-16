
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(window.localStorage.getItem("mode"));
updateMode();
function updateMode(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "#000";
    }else{
        bodyEl.style.backgroundColor = "#fff";
    }
}
inputEl.addEventListener("input",()=>{
    updateMode();
    updateLocalstorage();
});
function updateLocalstorage(){
    window.localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}