//

$(document).ready(function() 
{

    // Pokemon pics
    for(var i = 1; i < 152; i++) {
        $('.main').append("<img id=" + i + " src='http://pokeapi.co/media/img/" + i + ".png'>")
    }

    $(document).on("click", "img", function() 
    {
        var pokemon_id = $(this).attr('id')
        console.log("Pokemon ID is: " + pokemon_id);

        // Pokemon info
        $.get("http://pokeapi.co/api/v1/pokemon/" + pokemon_id + "/", function(res) {


            // Name
            $('.right-sidebar').children('#name').html("<h2>" + res.name + "</h2>")

            // Abilities
            for(var i = 0; i < res.abilities.length; i++) 
            {
                // Need to unhide <p> element
                $('.right-sidebar').children('#abilities').html("<li>" + res.abilities[i].name + "</li>");
            }

            // Types 
            var types = "";
            types += "<h3>Types</h3>";
            types += "<ul>"
            for(var i = 0; i < res.types.length; i++) 
            {
                $('.right-sidebar').children('#types').html("<li>" + res.types[i].name + "</li>");
                
            }
            types += "</ul>"
            $('#types').html(types);

            // Height
            $('.right-sidebar').children('#height').html(res.height)

            // Weight
            $('.right-sidebar').children('#weight').html(res.weight)    

        }, "json")
    })
});
