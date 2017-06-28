//funcion jquery que ingrese tareas ordenadas asignada por el usuario

$(document).ready(
  function(){
    $('#button').click(//al hacer click en el boton se ejecute la funcion
      function(){
        var input = $('input[name=ListItem]').val();//valor de nuestro input 
        $('ol').append('<p><input class="with-gap" name="group3" type="radio" id="test5" checked /><label for="test5">' + input +'</label></p>' +'<a class="waves-effect waves-light btn" id="remover">remove</a>');//para que lista quede dentro de un li
      }); 

//busco remover las tareas cuando le de click al boton remover
    $('remover').click(
        function(){

        }
      )
  }
  );

