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
 