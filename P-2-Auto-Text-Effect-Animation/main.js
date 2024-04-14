
const career = ["youtuber","web developer","freelancer"];
let careerIndex = 0;
let charIndex = 0;
const Elecont = document.querySelector(".container");
update();
function update(){
    charIndex++;
    Elecont.innerHTML = `
    <h1>I 'm a ${career[careerIndex].slice(0,charIndex)}</h1>
    `;
    if(charIndex == career[careerIndex].length){
        charIndex = 0;
        careerIndex++;
    }
    if(careerIndex == career.length){
        careerIndex = 0;
    }
    setTimeout(()=>{
        update();
    },400)
}

