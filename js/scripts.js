const body = document.body;
const header = document.querySelector("header");
menuIcon=document.querySelector("#menuIcon");
const home = document.querySelector(".home");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const img = document.querySelector("#img");
var imagenes;
var cont=0;


if(img!=null){
    setHomeImages();
    carrousel(home, img, imagenes);
    window.addEventListener("resize", setHomeImages);
}

window.addEventListener('scroll', cambioHeader);

let lastScroll = 0;
function cambioHeader(){
    const currentScroll = window.scrollY;
    if (currentScroll == 0) {
        header.classList="header";
        header.style="transition:ease 0.5s";
        return;
    }
    if (currentScroll > lastScroll) {
        header.classList="header scroll-down";
    } else if (currentScroll < lastScroll) {
        header.classList="header scroll-up";
        header.style="transition:ease 0.5s";
    }
    lastScroll = currentScroll;
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


//retroceder y avanzar foto
function retrocederFoto(){
    if(cont>0){
        img.src = imagenes[cont - 1];
        cont--;
    }else{
        img.src = imagenes[imagenes.length - 1];
        cont=imagenes.length - 1;
    }
}

function pasarFoto(){
    if(cont < imagenes.length - 1){
        img.src = imagenes[cont + 1];
        cont++;
    }else{
        img.src = imagenes[0];
        cont=0;
    }
}

function carrousel(contenedor,img,imagenes){
    contenedor.addEventListener("click", function(event){
        if(event.target==prev){
            retrocederFoto();
        }
        else if(event.target==next){
            pasarFoto();
        }
    });
}

//Touch
if(img!=null){
    var mc = new Hammer.Manager(img);
    mc.add(new Hammer.Swipe({
    direction: Hammer.DIRECTION_HORIZONTAL
    }));

    mc.on('swipeleft', function () {    
        retrocederFoto()
    });

    mc.on('swiperight', function () {
        pasarFoto()
    });
}
var mc = new Hammer.Manager(menu);

mc.add(new Hammer.Swipe({
  direction: Hammer.DIRECTION_VERTICAL
}));

mc.on('swipeup', function () {
    cerrarMenu()
});

//formulario de contacto
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const tel = document.querySelector("#phone");
const mensaje = document.querySelector("#mensaje");
const formulario =document.querySelector(".formulario");

if(formulario!=null){
    formulario.addEventListener("submit", enviarForm);
}

function enviarForm(event){
    var link="mer-vs@hotmail.com?subject=Consulta desde la web&body=Nombre: "+nombre.value+"<br>Teléfono:"+phone.value;
    window.location.href="mailto:"+link;
    if(event){
        alert(event.target.tagName);
    }
}
