
//trending product
var mixer = mixitup('.trendi_mix');

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

   //countdown

   $('#cart_countdown').countdown('2022/7/01', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).html(event.strftime('<div class="countown">%D<span>days</span></div> <div class="countown">%H <span>hours</span></div> <div class="countown">%M<span>min</span></div> <div class="countown">%S<span>sec</span></div>'));
  });
  $('#cart_countdown_two').countdown('2022/8/01', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).html(event.strftime('<div class="countown">%D<span>days</span></div> <div class="countown">%H <span>hours</span></div> <div class="countown">%M<span>min</span></div> <div class="countown">%S<span>sec</span></div>'));
  });