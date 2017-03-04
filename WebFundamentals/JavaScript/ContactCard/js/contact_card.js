// Contact card 

$(document).ready(function() {

    $(document).on('click', '.card', function() {
        // toggle on/off newly elements created
        $(this).children().toggle('slow');
    })

    $('form').submit(function() {

        // get values
        var fname = $('#firstname').val();
        var lname = $('#lastname').val();
        var description = $('#description').val();

        // set form values to empty after submit
        $('#firstname').val('');
        $('#lastname').val('');
        $('#description').val('');

        // write out html
        var result = "<div class='card'><h2>" + fname + " " + lname + "</h2><p hidden>" + description + "</p></div>";
        
        $('.contact_card').append(result);

        return false;
    })
    
})