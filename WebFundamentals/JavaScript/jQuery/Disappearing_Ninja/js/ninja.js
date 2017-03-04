// jQuery for disappearingNinja

$( document ).ready(function() 
    {
        // fade out ninja when clicked
        $( '.ninja' ).click(function() 
            {
                $(this).hide('slow');
            });

        // add ninja to the end
        $( '#btn_start' ).click(function()
        {
            $('.main').append('<img class="ninja" src="images/ninja.jpg" alt="ninja image" />')
        });

        // dynamically generated content
        $(document).on('click', 'img', function()
        {
            $(this).fadeOut();
        });

    });