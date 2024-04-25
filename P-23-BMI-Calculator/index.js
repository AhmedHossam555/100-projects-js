const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.querySelector("button");
const calores = document.querySelector(".calores");
const conditional = document.querySelector(".conditional");
button.addEventListener("click",()=>{
  
    const bmivalue= weight.value / ((height.value / 100) * (height.value / 100));
    calores.innerHTML  = bmivalue;
    let cond;    
    if( bmivalue < 18.5 ){
        cond = "under weight";
    }else if(bmivalue >= 18.5 && bmivalue <= 24.9) {
        cond = "normal weight";
    }else if(bmivalue >= 25 && bmivalue <= 29.9){
        cond = "over weight";
    }else if (bmivalue >= 30){
        cond = "obesity";
    }
    conditional.innerHTML = `Weight Condition: ${cond}`;
})
