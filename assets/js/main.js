//funcion jquery que ingrese tareas ordenadas asignada por el usuario

$(document).ready(function(){

   $('#list-items').html(localStorage.getItem('listItems'));

    $('#button').click( function(e){
        e.preventDefault();
        var input = $('input[name=ListItem]').val();//valor de nuestro input 
        $('ol').append('<li><input type="checkbox"/>' + input + '<a class="waves-effect waves-light btn delete" id="delete">Borrar</a></li>');//para que lista quede dentro de un li
          $('#todo-list-item').val("");

      }); 

/*$('#test5').click(//al hacer click en el boton se ejecute la funcion
      function(){
      var nuevoDiv = $('nuevo-div').append('p');
      }); */

//busco remover las tareas cuando le de click al boton remover
$(document).on('click' , '.delete' , function(){
 $(this).parent().remove();
 //localStorage.setItem('listItems', $('#list-items').html());

  });
});


