/* global $, alert, console */

// nav list in small screens
const listIcon = document.querySelector('.landing header i.show-nav-button');
const navList = document.querySelector('.landing header nav.main-navbar');

listIcon.addEventListener("click", () => {
    navList.classList.toggle("show-nav");
})

document.addEventListener("click", (e) => {
    if (e.target !== listIcon && e.target !== navList) {
        navList.classList.remove("show-nav")
    }
})

$(function () {
    'use strict';

    // Links and active class
    $('.landing header nav ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

    // Testimonials slider
    (function autoSlider() {
        $('.testi-slider .active').each(function() {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function() {
                    $(this).removeClass('active').next().addClass("active").fadeIn()
                    autoSlider();
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function() {
                    $(this).removeClass("active");
                    $(".testi-slider div").eq(0).addClass("active").fadeIn();
                    autoSlider();
                })
            }
        })
    }())
})

$(function(){
	$('.images').mixItUp();
});
// Slider
document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '#splide', {
        type   : 'loop',
        perPage: 1,         
        perMove: 1,
        pagination: false
    } );
    splide.mount();
} );
