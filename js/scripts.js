const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");


menuIcon.addEventListener("click", despMenu);

function despMenu(){
    if(menuIcon.classList=="icon fas fa-bars"){
        menuIcon.classList="icon fas fa-times";
        menu.style.display="block";
        header.style.background="rgba(0,0,0,0.5)";
    }else{
        menuIcon.classList="icon fas fa-bars";
        menu.style.display="none";
        header.style.background="transparent";
    }
}
