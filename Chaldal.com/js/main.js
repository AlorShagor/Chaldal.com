$('document').ready(function(){
   
    $('.payment-slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })
    
    
    // Special Offer 
    $('.sp-offer-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    // Special Offer 

    // Comment 
    $('.comment-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // Comment 

    // Counter 
    $('.counter-num').counterUp({
        delay: 10,
        time: 1000
    });
    // Counter 

})