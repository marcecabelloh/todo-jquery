//funcion jquery que ingrese tareas ordenadas asignada por el usuario

$(document).ready(function(){

   $('#list-items').html(localStorage.getItem('listItems'));

    $('#button').click( function(e){
        e.preventDefault();
        var input = $('input[name=ListItem]').val();//valor de nuestro input 
        $('ol').append('<p><input class="with-gap" name="group3" type="radio" id="test5" checked /><label for="test5">' + input +'</label> <a class="waves-effect waves-light btn">Borrar</a></p>');//para que lista quede dentro de un li
          $('#todo-list-item').val("");

      }); 

//intento que tareas pasen a mi div si presiono el check-box
$('#test5').click(//al hacer click en el boton se ejecute la funcion
      function(){
        var nuevoDiv = $('nuevo-div').append('p');
      }); 

//busco remover las tareas cuando le de click al boton remover
$('.btn').click(function(r){
  $(r).remove();
  localStorage.setItem('listItems', $('#list-items').html());
       

});
});


