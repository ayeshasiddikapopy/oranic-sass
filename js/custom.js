

 


  //nav
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling>10){
      $(".xyz").addClass("menu_inner")
    }
    else{
      $(".xyz").removeClass("menu_inner")
    }
  }) ;

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
 //slide 
 $('.slide_slick').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  centerpadding:"0",
  autoplay:true,
  nextArrow:".ab",
  prevArrow:".cd"
});

$('.cat_slick_items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerpadding:"0",
  nextArrow:".after",
  prevArrow:".before"
});
 //category mixit
 var mixer5 = mixitup('#cat_mixi_item');

  //dates
 $('#deal_date').countdown('2022/7/01', function(event) {
   $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
   $(this).html(event.strftime('<div class="countown">%D<span>days</span></div> <div class="hours">%H <span>hours</span></div> <div class="countown">%M<span>mint</span></div> <div class="hours">%S<span>second</span></div>'));
 });

 //category slick
$('.cat_slick_item').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerpadding:"0",
  nextArrow:".after",
  prevArrow:".before",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }
  ]
 });

// top rated product
$('.rated_slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '0',
  nextArrow:".prevs",
  prevArrow:".gddyhg",
  dots:false,
  variableWidth: true,
  speed: 300
});
 