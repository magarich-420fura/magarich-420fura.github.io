$(document).ready(function() {

    "use strict";

    $(".streaming").hover(
        function() {
            $(this).find(".play-btn").css('background-color', 'black');
            $(this).find(".play-btn").css('color', 'white');
        }, function() {
            $(this).find(".play-btn").css('background-color', '#f0f0f0');
            $(this).find(".play-btn").css('color', '#777');
        }
    );

    $('#vk').on('click', function() {
        location.href = "https://vk.com/artist/magarich?z=audio_playlist-2000257052_16257052%2Ff110079f5bfefff69b";
    });

    $('#yandex').on('click', function() {
        location.href = "https://music.yandex.ru/album/23416809/track/107039197";
    });


});