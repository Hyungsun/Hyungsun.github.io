function aside(){
    
    
    var   win = $(window);
    
     win.on('scroll',function(){
         var aside = $(".aside"),
            aside_h = aside.height(),
            aside_offset = aside.offset().top,
            aside_bottom =aside_h + aside_offset,
             aside_btm = aside_bottom,
             winTop = $(window).scrollTop(),
             bBar_t = $('#bBar').offset().top,
             cont_t = $('.content').offset().top;
       
        if( aside_bottom >=  bBar_t){
            aside.addClass("psType",function(){
                $(this).css({'position':'absolute', 'top':bBar_t - 170} )
            });
        }else if(  aside_btm >=  cont_t){
            aside.removeClass("psType",function(){
                $(this).css({'position':'fixed', 'top':14 + "vw"})
            })
        }
    });
};
