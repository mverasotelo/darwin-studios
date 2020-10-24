const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const home = document.querySelector(".home");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const img = document.querySelector("#img");
var imagenes;
var cont=0;


menuIcon.addEventListener("click", despMenu);
setHomeImages();
carrousel(home, img, imagenes);
window.addEventListener("resize", setHomeImages);

function despMenu(){
    if(menuIcon.classList=="icon fas fa-bars"){
        menuIcon.classList="icon fas fa-times";
        menu.style.display="block";
        menu.style.animation="menuAbrir 0.5s ease";
    }else{
        menuIcon.classList="icon fas fa-bars";
        menu.style.animation="menuCerrar 0.5s ease";
        menu.style.display="none";
    }
}

function setHomeImages(){
    if(window.matchMedia('(max-width:720px)').matches){
        imagenes = ["./img/2.jpg", "./img/1.jpg"];
        img.src = "./img/2.jpg";
    }else{
        imagenes = ["./img/darwin.png", "./img/studio.jpg", "./img/th.jpg"];
        img.src = "./img/darwin.png";
    }
}

function carrousel(contenedor,img,imagenes){
    contenedor.addEventListener("click", function(event){
        if(event.target==prev){
            if(cont>0){
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont=imagenes.length - 1;
            }
        }
        else if(event.target==next){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont=0;
            }
        }
    });
}
