//cargar pagina
window.onload= function(){
    new Vue({
        el:"#loader",
        data:{
            show:""
        }
    });
}

// abrir/cerrar menu
new Vue({
    el:"#menuDesp",
    data:{
        iconoMenu:"icon fas fa-bars",
        menuClass:"cerrarMenu",
    },
    methods:{
        desplegarMenu: function(){
                if(this.iconoMenu=="icon fas fa-bars"){
                    this.iconoMenu="icon fas fa-times";
                    this.menuClass="abrirMenu";
                    document.body.style.overflow='hidden';
                }else{
                    this.iconoMenu="icon fas fa-bars";
                    this.menuClass="cerrarMenu";
                    document.body.style.overflow ='auto';
                }
        },
    }
});

new Vue({
    el:"#espacios",
    data:{
        espacios:["NAVE NICETO", "NAVE DARWIN", "NAVE FÁBRICA"],
        titulo:"",
        popUp:"",
        espacio:""
    },
    methods:{
        infoEspacio: function(event){
            this.popUp="popUp";
            document.body.style.overflow='hidden';
            this.titulo=this.espacios[0];
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
        },
    }
});
