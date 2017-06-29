var i = 0; //contador, para poder introducir los check como tareas creadas y completas

//funcion jquery que ingrese tareas ordenadas asignada por el usuario

$(document).ready(function(){

   $('#list-items').html(localStorage.getItem('listItems'));

    $('#button').click( function(e){
        e.preventDefault();
        var input = $('input[name=ListItem]').val();//valor de nuestro input 
        $('ol').append('<li><input type="checkbox"/>' + input + '<a class="waves-effect waves-light btn delete" id="delete">Borrar</a></li>');//para que lista quede dentro de un li
          $('#todo-list-item').val("");//para que mi input quede limpio

      }); 


//busco remover las tareas cuando le de click al boton remover
$(document).on('click' , '.delete' , function(){
 $(this).parent().remove();

  });

/*intento agregar tareas a tareas completadas*/
/*function onSelectItem(item) {
    var html = '<div class="row item" id="' + item.id + '">' + $(item).html() + '</div>'; //id item nuevo
    console.log(html);
    $(item).remove();
    $(".completed-items").append(html); //añadir completed items al html
}
});



