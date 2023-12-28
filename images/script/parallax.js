window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("texto-bienvenida");
    var elemento2 = document.getElementById("deslizar");
    //var elemento3 = document.getElementById("tablet");
    var imagen = document.getElementById("imagen-servicios");
    var imagen_dos = document.getElementById("imagen-servicios2");
    var imagen_tres = document.getElementById("imagen-servicios3");

    //var imagen_parallax = document.getElementById("capa-uno-parallax");
    var imagen_motivo= document.getElementById("capa-dos-parallax");

    elemento1.style.top = posicion * 0.2 + "px";
    elemento2.style.top = posicion * 0.3 + "px";
   // elemento3.style.top = posicion * 0.1+ "px"
    imagen.style.bottom = posicion * 0.08 + "px";
    imagen_dos.style.bottom = posicion * 0.07 + "px";
    imagen_tres.style.bottom = posicion * 0.1 + "px";
    //imagen_parallax.style.top = posicion * 0.1 + "px";
    imagen_motivo.style.bottom = posicion * 0.2 + "px";
}