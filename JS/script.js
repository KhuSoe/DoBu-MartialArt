$(document).ready(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
    
    $('#toggleButton').on('click', function() {
        $('#collapseExample').collapse('toggle');
        $(this).find('i').toggleClass('bi-chevron-down bi-chevron-up');
    });

    $(".hover-effect-container").hover(
        function() {
            $(this).find(".hover-effect-text").css("bottom", "0");
        }, function() {
            $(this).find(".hover-effect-text").css("bottom", "-100%");
        }
    );
});
