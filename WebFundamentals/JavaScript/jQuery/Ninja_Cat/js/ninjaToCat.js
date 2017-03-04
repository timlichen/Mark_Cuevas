$( document ).ready(function() 
    {
        $('img').click(function() 
            {
                $(this).show('data-alt-src');
                console.log('data-alt-src value is: ', $(this).attr('data-alt-src'));
            });
    });