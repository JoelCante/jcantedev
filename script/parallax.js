/*window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

   var elemento1 = document.getElementById("descripcion");
    var elemento2 = document.getElementById("motivo");
    //var elemento3 = document.getElementById("tablet");
    var imagen = document.getElementById("imagen-servicios");
    var imagen_dos = document.getElementById("imagen-servicios2");
    var imagen_tres = document.getElementById("imagen-servicios3");

    //var imagen_parallax = document.getElementById("capa-uno-parallax");
    var imagen_motivo= document.getElementById("motivo");

  // elemento1.style.bottom = posicion * 0.2 + "px";
    //elemento2.style.top = posicion * 0.3 + "px";
   // elemento3.style.top = posicion * 0.1+ "px"
    imagen.style.bottom = posicion * 0.08 + "px";
    imagen_dos.style.bottom = posicion * 0.07 + "px";
    imagen_tres.style.bottom = posicion * 0.1 + "px";
    //imagen_parallax.style.top = posicion * 0.1 + "px";
    imagen_motivo.style.bottom = posicion * 0.2 + "px";
}*/


//ajusta la altura de la seccion "cabecera" con la altura del disponible viewport------------------------------
var altura = $(window).innerHeight();
const alt = parseInt(altura);
console.log(altura);
//$('#cabecera').height(altura);

$(window).scroll(function() {
    if ($("#sobre-mi").offset().top > alt) {
        $("#sobre-mi").addClass("scroll");
    }
  });