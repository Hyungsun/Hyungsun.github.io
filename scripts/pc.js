$(document).ready(function () {
    $(".list_sub").hide();
    
    $('body').scrollTop(function(){
        if ($('body').scrollTop() == 0){
                var $mainH = $('#zionHead');
    
        $mainH.on("mouseenter",function(){
            $mainH.removeClass('head_type1');
            $mainH.addClass('head_type2');
        });
    
            $mainH.on("mouseleave",function(){
            $mainH.removeClass('head_type2');
            $mainH.addClass('head_type1');
        });
        }else {
            
        }
    });
    
    var downBtn = $(".link_gnb2"),
                prevBtn = $(".link_gnb1"),
                nextBtn = $(".link_gnb3");
            
            prevBtn.on("mouseenter", function () {
                $(".list_sub").slideUp(300);
            });
            
            nextBtn.on("mouseenter", function () {
                $(".list_sub").slideUp(300);
            });
            
            downBtn.on("mouseenter", function () {
                $(".list_sub").slideDown(300);
            });
            
            $(".list_sub").on("mouseleave", function () {
                $(".list_sub").slideUp(300).stop().hide();
            });
    
    $(window).scroll(function () {
        
        var $thisW = $(this),
            $head = $('#zionHead');
        
        if ($thisW.scrollTop() > 50) {
            
            $head.removeClass('head_type1');
            $head.addClass('head_type3');
            
        } else {
            $head.removeClass('head_type3');
            $head.addClass('head_type1');
        }
    });
});




//    var $mainH = $('#zionHead');
//    
//        $mainH.on("mouseenter",function(){
//            $mainH.removeClass('head_type1');
//            $mainH.addClass('head_type2');
//        });
//    
//            $mainH.on("mouseleave",function(){
//            $mainH.removeClass('head_type2');
//            $mainH.addClass('head_type1');
//        });