const formSus = document.getElementById("suscripcion");
if(formSus!=null){
    formSus.addEventListener("submit", susConfirmacion);
}

function susConfirmacion(event){
    event.preventDefault();
    formSus.innerHTML=formSus.innerHTML+"<div class='confirma'>La suscripción se ha realizado correctamente!</div>";
}

const formRes = document.getElementById("reservar");
if(formRes!=null){
    formRes.addEventListener("submit", resConfirmacion);
}

function resConfirmacion(event){
    event.preventDefault();
    let nombre= document.getElementById("name");
    formRes.innerHTML=formRes.innerHTML+"<div class='confirma'>Reserva confirmada. Te esperamos, "+nombre.value+"!</div>";
}

const agregar = document.querySelectorAll(".order");

if(agregar!=null){
    for(i=0;i<agregar.length;i++){
        agregar[i].addEventListener("click", agregarProducto);
    }

    function agregarProducto(event){
        let cantidad=event.target.previousElementSibling.value;
        let precio=event.target.parentNode.children[2].innerHTML;
        if(cantidad>0&&cantidad<=10){
            console.log("Agregaste "+cantidad+" "+event.target.value+" ( $"+Number(precio.substr(1))*cantidad+" )");
        }
        else if(cantidad>10)
            console.log("Puedes ingresar hasta 10 unidades en un mismo pedido");
        else{
            console.log("Debes ingresar al menos una unidad");
        }
    }
}