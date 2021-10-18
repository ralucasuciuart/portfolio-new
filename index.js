// go-to-top button slide-up animation on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#top_btn').slideDown(".3s", "swing");
    } else {
        $('#top_btn').slideUp(".3s", "swing");
    }
});