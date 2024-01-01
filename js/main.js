
$(document).ready(function(){
    // hero slider 
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        smartSpeed : 1000,
        dots : false, 
        navText : ['PREV' , 'NEXT'],
        responsive:{
            0:{
                nav : false,
            },
            768:{
                nav : true,
            },
            1000:{
                
            }
        }
    })

     // project slider 
     $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed : 1000,
        dots : true ,
        margin : 24 ,
        responsive:{
            0:{
               items : 1,
               nav : false,
               margin : 0,
            },
            768:{
              items : 2,
            },
            1140:{
                items : 2,
                center : true ,
            }
        }
    })
    // review-slider 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items : 1,
        smartSpeed: 800,
     
    })

    
});