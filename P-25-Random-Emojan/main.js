const btn = document.querySelector("button");
const emoji = document.querySelector(".emoji");
const emojiarr = [];
btn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random()*emojiarr.length);
    btn.innerText = emojiarr[randomNumber].emojiname;
    emoji.innerText = emojiarr[randomNumber].code;
});
async function getEmoji(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=9ccf1cd181b6afeccbae0823d66bd546f885349f");
    const data = await response.json();
    for(let i = 0; i < 1500; i++){
        emojiarr.push({emojiname:data[i].character, code: data[i].slug})
    }
}
getEmoji();