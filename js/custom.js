$(function () {

    $('.counter-up').counterUp({
        time: 3000
    });

   $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });

});

