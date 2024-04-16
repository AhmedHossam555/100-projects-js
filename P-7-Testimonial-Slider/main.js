const testimonials = [{
    urle: "p-1.jpg",
    text: "His work is of the highest quality, and he is always willing to go the extra mile. I highly recommend him for any front-end development work you need done.",
    username: "Keta",
},
{
    urle: "p-2.jpg",
    text: "Apple products are amazing! They are so well-designed and easy to use. I especially love my iPhone and iPad. I use them for everything from staying connected with friends to managing my finances. I also love the fact that Apple products are so secure. I know that my data is safe with Apple.",
    username: "John",
},
{
    urle: "https://media.istockphoto.com/id/2099315935/photo/woman-taking-a-selfie-in-front-of-the-famous-arc-de-triomphe.webp?b=1&s=170667a&w=0&k=20&c=PUaoJ6nS2dybEHx7oxBEVg6w0yXL-frXz0zBpyu3W_g=",
    text: "As a backend developer, I have used this tool for over a year now and it has been a lifesaver. It has helped me to improve my productivity and efficiency, and has made my job much easier. I would highly recommend this tool to any backend developer.",
    username: "Ramas",
},
];
const img = document.querySelector(".img");
const textEl = document.querySelector(".text");
const username = document.querySelector(".username");
let idx = 0;
updatetestimonial();
function updatetestimonial(){
    const {urle,text,username} = testimonials[idx];
    img.src = urle;
    textEl.innerHTML = text;
    username.innerHTML = username;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updatetestimonial();
    },3000)
}
