
        $('#flash_dates').countdown('2022/7/01', function(event) {
          $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
          $(this).html(event.strftime('<div class="counter">%D<span>days</span></div> <div class="counter">%H <span>hours</span></div> <div class="counter">%M<span>minutes</span></div> <div class="counter">%S<span>second</span></div>'));
        });

        // //mixit prodoct items
        var mixer = mixitup('.top_product_item');

        //testimonial slick home    
        $('.test_slicks').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            prevArrow:".prev",
            nextArrow:".next"
         });

   //navbar
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling>10){
        $(".xyz").addClass("menu_inner")
    }
    else{
        $(".xyz").removeClass("menu_inner")
    }
 });
 
 //scroll
 $(window).scroll(function(){
    var srcolling=$(this).scrollTop();
        if(srcolling>10){
            $(".up_down i").fadeIn(500);
        }
        else{
            $(".up_down i").fadeOut(500);
        }
    })
    $(".up_down i").on('click',function(){
    $("html, body").animate({
        scrollTop:0
    } ,2000)
    });
