$(document).ready(function () {
    console.log("ready!");

    var text_max = 140;
    $('.counter').html(text_max);

    $('.text').keyup(function() {
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
        if (text_remaining < 0) {
            $('.counter').css('color', 'red');
        } else {
            $('.counter').css('color', 'black');
        }
        $('.counter').html(text_remaining);
    });

});