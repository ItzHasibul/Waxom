$(function() {

    //==== Slick-Slider Banner JS

    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider Banner JS PART END =========== 


    // ==== Slick-Slider SERVICE JS

    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider SERVICE JS PART END ===========


    // ==== Slick-Slider SPONSOR JS

    $('.sponsor_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider SPONSOR JS PART END =========== 


    // ==== Slick-Slider Post JS

    $('.post_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider Post JS PART END ===========

    //==== VenoBox Video JS

    new VenoBox({
        selector: '.my-video-links',
    });

    // =========== VenoBox Video JS PART END =========== 


    //==== Counter-Up JS

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // =========== Counter-Up JS PART END =========== 


    //==== Back-to-top button

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    // =========== Back-to-top button PART END =========== 


    var containerEl = document.querySelector('.mixup_site');

    var mixer = mixitup(containerEl);

    //==== Animate the scroll to top

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 3000);
    });

    // =========== Animate the scroll to top PART END =========== 


});












// ===========  PART START ===========

// ===========  PART END ===========