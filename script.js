$(document).ready(function(){ // INICIALIZA BLOQUE DE CÓDIGO JQUERY
    
    $("#container").hide(); // OCULTA CONTENEDOR

    $("#cmd").keypress(function(e) {
      var comand = $("#cmd").val();
      if(e.which == 13 && comand == 'ls') {
        $("#container").show(); // MUESTRA CONTENEDOR
      }else if (comand == 'clear') {
        $("#container").hide(); // OCULTA CONTENEDOR
      }

    });
});