// Game of Thrones

$(document).ready(function() {

    $(document).on('click', 'img', function() {
        // which pic
        var id = $(this).attr('id');
        //console.log(id);

        // get pic info
        $.get("https://anapioficeandfire.com/api/houses/" + id + "/" , function(res){
        console.log(res);
        $('.name').html("<h4>Name </h4>" + res.name);
        $('.words').html("<h4>Words </h4>" + res.words);

        var titles = "";
        titles += "<h4>Titles</h4>";
        titles += "<ul>";
        for(var i = 0; i < res.titles.length; i++) {
                titles += "<li>" + res.titles[i] + "</li>"
            }
        titles += "</ul>";
        $('.titles').html(titles);
    }, 'json');
    })

    // for(var i = 0; i < 445; i++) {
    //     $.get("https://anapioficeandfire.com/api/houses/" + i, function(res) {
    //         console.log(res);
    //     }, 'json');
    // }

});