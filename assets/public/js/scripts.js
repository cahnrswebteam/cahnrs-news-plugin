// Stops YouTube video from playing whenever modal is closed
(function($) {

    //Stops video on modal close
    $('.modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
   });
    

    //Closes modal when button is clicked
    $('.modal').on('click', 'button.close', function (eventObject) {
        $('.modal').modal('hide');
    });
})( jQuery );

