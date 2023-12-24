//ajusta la altura de la seccion "cabecera" con la altura del disponible viewport------------------------------

$(document).ready(function(){
  var altura = $(window).innerHeight();
  //alert(altura);
  $('#cabecera').height(altura);
});

window.addEventListener("scroll", function(){
  var menu = document.getElementById('menu-flotante');
  menu.classList.toggle("abajo",window.scrollY>0);
})

//------------------------------
var body = $('body');
var boton = document.getElementById('boton-menu');
var botonoculto = document.getElementById('boton-menu-oculto');

function abrir() {
    $("#menu").slideToggle();
    body.addClass('sin-scroll');
    botonoculto.style.display = "block";
    boton.style.display ="none";
}


function  cerrar(){
  $("#menu").slideToggle();
    body.removeClass('sin-scroll');
    botonoculto.style.display = "none";
    boton.style.display ="block";
} 

//------------------------------
  $(document).ready(function(){
    $('#subir').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });
  });



