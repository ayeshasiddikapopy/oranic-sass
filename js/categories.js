//x-zoom
$(".xzoom").xzoom({tint: '#333', Xoffset: 15});

// $(".xzoom").xzoom({tint: '#333', Xoffset: 15});
$(".xzoom-gallery").xzoom({


// top, left, right, bottom, inside, lens, fullscreen, #ID
position: 'right', 

// inside, fullscreen
mposition: 'inside', 

// In the HTML structure, this option gives an ability to output xzoom element, to the end of the document body or relative to the parent element of main source image.
rootOutput: true,

// x/y offset
Xoffset: 10,
Yoffset: 10,

// Fade in effect, when zoom is opening.
fadeIn: true,

// Fade transition effect, when switching images by clicking on thumbnails.
fadeTrans: true,

// Fade out effect, when zoom is closing.
fadeOut: true,

// Enable smooth effects
smooth: true,

// Smooth move effect of the big zoomed image in the zoom output window. 
// The higher value will make movement smoother.
smoothZoomMove: 30,

// Smooth move effect of lens.
smoothLensMove: 1,

// Smooth move effect of scale.
smoothScale: 2,

// From -1 to 1, that means -100% till 100% scale
defaultScale: 0, 

// Scale on mouse scroll.
scroll: true,

// Tint color. Color must be provided in format like "#color". 
tint: true,

// Tint opacity from 0 to 1.
tintOpacity: 0.5,

// Lens color. Color must be provided in format like "#color". 
lens: true,

// Lens opacity from 0 to 1.
lensOpacity: 0.5,

// 'box', 'circle'
lensShape: 'box', 

// Custom width of zoom window in pixels.
zoomWidth: '200',

// Custom height of zoom window in pixels.
zoomHeight: '200',

// Class name for source "div" container.
sourceClass: 'xzoom-source',

// Class name for loading "div" container that appear before zoom opens, when image is still loading.
loadingClass: 'xzoom-loading',

// Class name for lens "div".
lensClass: 'xzoom-lens',

// Class name for zoom window(div).
zoomClass: 'xzoom-preview',

// Class name that will be added to active thumbnail image.
activeClass: 'xactive',

// With this option you can make a selection action on thumbnail by hover mouse point on it.
hover: true,

// Adaptive functionality.
adaptive: true,

// When selected position "inside" and this option is set to true, the lens direction of moving will be reversed.
lensReverse: false,

// Same as lensReverse, but only available when adaptive is true.
adaptiveReverse: false,

// Lens will collide and not go out of main image borders. This option is always false for position "lens".
lensCollision: true,

//  Output title/caption of the image, in the zoom output window.
title: false,

// Class name for caption "div" container.
titleClass: 'xzoom-caption',

// Zoom image output as background
bg: true 

});




//nice number

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

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
