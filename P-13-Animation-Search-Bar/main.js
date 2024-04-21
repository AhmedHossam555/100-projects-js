const search = document.querySelector(".search-container");
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("search")){
        search.classList.toggle("active");
    }
})
  
