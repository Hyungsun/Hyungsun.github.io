$(document).ready(function () {
    $(".list_sub").hide();
    
    /* 화면 최상위 일때 header */
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
    
    /* drop menu 충돌 방지 */
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
    
    /* 스크롤 시 변하는 메뉴 */
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
    
    /* MOBILE 메뉴 토글 옵션 */
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".drop_toggle").slideToggle();
    });
    
    /* MOBILE SUB 토글 옵션 */
    $(".open_toggle").click(function() {
       $(".sub_toggle").slideToggle(); 
    });
});
