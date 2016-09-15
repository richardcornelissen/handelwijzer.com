$(document).ready(function () {
    $('#responsive-menu').click(function () {
        $('#nav').toggle();
    });

    $('#slides').superslides({
        'play': 5000,
    });
});