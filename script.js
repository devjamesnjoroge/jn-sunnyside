let menu = document.querySelector(".menu");
let nav = document.querySelector("nav ul");
let closed = document.querySelector(".close");

menu.addEventListener("click", ()=>{
    nav.style.top = "0";
    menu.classList.add("none");
    menu.classList.remove("menu");
    closed.classList.remove("none");
    closed.classList.add("disp");
})

closed.addEventListener("click", ()=>{
    nav.style.top = "-10000px";
    closed.classList.remove("disp");
    closed.classList.add("none");
    menu.classList.remove("none");
    menu.classList.add("menu");
    
})