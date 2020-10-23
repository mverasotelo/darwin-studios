const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");


menuIcon.addEventListener("click", despMenu);

function despMenu(){
    if(menuIcon.classList=="icon fas fa-bars"){
        menuIcon.classList="icon fas fa-times";
        menu.style.display="block";
        menu.style.height=screen.height;
        menu.style.animation="menuAbrir 0.5s ease";
    }else{
        menuIcon.classList="icon fas fa-bars";
        menu.style.animation="menuCerrar 0.5s ease";
        menu.style.display="none";
    }
}
