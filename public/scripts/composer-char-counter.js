$(document).ready(function () {
    console.log("ready!");

    var text_max = 140;
    $('.counter').html(text_max + ' characters remaining');

    $('.text').keyup(function() {
        var text_length = $('.text').val().length;
        var text_remaining = text_max - text_length;

        $('.counter').html(text_remaining);
    });

});