$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    // autoplay:true,
    // autoplayHoverPause: true,
    // autoplaySpeed: 700,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },

        1000:{
            items:1
        }
    }
});