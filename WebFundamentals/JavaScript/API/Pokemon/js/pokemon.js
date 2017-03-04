// Pokemon

$(document).ready(function() 
{
    //console.log('Hello');
    for(var i = 1; i < 151; i++) {
        // console.log(i);
        $('.pokemon').append("<img src='http://pokeapi.co/media/img/" + i + ".png'>")
    }

});
