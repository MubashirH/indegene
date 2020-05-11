//calculating and assigning height of banner to content
function banner_resizing() {
    var peopleImgHeight = $('#people-img').height();
    $('.people-inner').css('height', peopleImgHeight);

    var forestImgHeight = $('#forest-img').height();
    $('.testimony-slider').css('height', forestImgHeight)
};

$(window).resize(function () {
    banner_resizing();
});

$(document).ready(function () {

    banner_resizing();

    //menu intialization
    var hamburger = $('#hamburger-icon');
    hamburger.click(function () {
        hamburger.toggleClass('active');
        var hamburgerClass = hamburger.attr('class');
        if (hamburgerClass === 'active') {
            $(".menu-content").css('display', 'block');
            $(".menu-content").removeClass('fadeOutUp');
            $(".menu-content").addClass('fadeInDown');
        }
        else {
            $(".menu-content").removeClass('fadeInDown');
            $(".menu-content").addClass('fadeOutUp');
            setTimeout(function () {
                $(".menu-content").css('display', 'none');
            }, 1000);
        }
        return false;
    });


    //initializing swiper slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {

            1020: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2
            },
            600: {
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })
});