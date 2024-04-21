const input = document.querySelector(".date");
const age = document.querySelector(".age")
const button = document.querySelector(".calculate");
button.addEventListener("click",calculateAge);
function calculateAge(){
    if(input.value==""){
        alert("please enter birthday");
    }else{
        const datenow = new Date().getTime();
        const dateBrith = new Date(input.value);
        const date = datenow - dateBrith;
        const year = Math.floor(date / 1000 / 60 / 60 /24 /365);
        age.innerHTML = `Your age is ${year} years old`;
    }
}