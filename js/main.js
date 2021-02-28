$(function () {
    //scroll header
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $("header").addClass("header-shrink");
        } else {
            $("header").removeClass("header-shrink");
        }
    });


    //Projets with image loaded
    $("#container").imagesLoaded(function () {
        let $btns = $(".projects button");

        $btns.click(function (e) {
            $(".projects button").removeClass("active");
            e.target.classList.add("active");

            let selector = $(e.target).attr("data-filter");
            $(".projects .grid").isotope({
                filter: selector,
            });

            return false;
        });

        $(".projects .button-group #btn1").trigger("click");

        $(".projects .grid .test-popup-link").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        // images have loaded
    });

    // Owl-carousel

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            560: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});