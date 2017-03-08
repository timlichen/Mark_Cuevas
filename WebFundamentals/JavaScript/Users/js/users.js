// jQuery for Users 

$(document).ready(function() 
    {
        $('form').submit(function()
        {
            // display in table
            var fname = $('#firstname').val();
            var lname = $('#lastname').val();
            var email = $('#email').val();
            var contact = $('#contact').val();

            // blank out the form data
            $('#firstname').val('');
            $('#lastname').val('');
            $('#email').val('');
            $('#contact').val('');

            // html to append
            var markup = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";

            // append it
            $("table tbody").append(markup);
            
            return false;                       // prevents form from loading; and kicks us out of the function
        });
    });