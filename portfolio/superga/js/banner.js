
function banner(){
    var  s_time = 1000,
            s2_time = 2000,
            win = $(window),
            winWidth = win.width();
 if(winWidth <=640){ 
     $(".page-menu-bar").show();
     $(".bPage").show();
     
     $("#alert").hide();
     $("#gnb").hide();
     $("#tnb").hide();
     $("#lnb").hide();
     $(".callBox").hide();
     $(".addBox").hide();
    $("#banner").hide();
     $(".aside").hide();
     $(".hBox").hide();
     
     $(".left_btn2").on("click",function(){
        var lnb_li = $(".lnb_box").children("li"),
                lnb_li_width =  lnb_li.width();
    lnb_li.first().stop().animate({marginLeft:lnb_li_width},s_time,function(){
            lnb_li.css({marginLeft:0}).last().prependTo(".lnb_box");  
        });
    });
 $(".right_btn2").on("click",function(){
    var lnb_li = $(".lnb_box").children("li"),
            lnb_li_width =  lnb_li.width();   
    lnb_li.first().stop().animate({marginLeft:-lnb_li_width},s_time,function(){
           lnb_li.css({marginLeft:0}).first().appendTo(".lnb_box");  
        });
    });    
}else if(winWidth >=641 && winWidth <=1024){
    $(".page-menu-bar").hide();
    $(".bPage").hide();
    
     $("#alert").show();
    $(".hBox").show();
    $("#gnb").show();
    $("#tnb").show();
    $("#lnb").show();
    $(".callBox").show();
    $(".addBox").show();
    $("#banner").show();
    $(".aside").show();
    
    $(".left_btn").on("click",function(){
        var banner_li = $(".banner_box").children("li"),
                banner_li_width =  banner_li.width();
    banner_li.first().stop().animate({marginLeft:banner_li_width},s_time,function(){
            banner_li.css({marginLeft:0}).last().prependTo(".banner_box");  
        });
    });
    $(".left_btn2").on("click",function(){
        var lnb_li = $(".lnb_box").children("li"),
                lnb_li_width =  lnb_li.width();
    lnb_li.first().stop().animate({marginLeft:lnb_li_width},s_time,function(){
            lnb_li.css({marginLeft:0}).last().prependTo(".lnb_box");  
        });
    });
    $(".right_btn").on("click",function(){
    var banner_li = $(".banner_box").children("li"),
            banner_li_width =  banner_li.width();   
    banner_li.first().stop().animate({marginLeft:-banner_li_width},s_time,function(){
            banner_li.css({marginLeft:0}).first().appendTo(".banner_box");  
        });
    });    
      $(".right_btn2").on("click",function(){
    var lnb_li = $(".lnb_box").children("li"),
            lnb_li_width =  lnb_li.width();   
    lnb_li.first().stop().animate({marginLeft:-lnb_li_width},s_time,function(){
           lnb_li.css({marginLeft:0}).first().appendTo(".lnb_box");  
        });
    });    
}else if(winWidth >=1025){
    $(".page-menu-bar").hide();
    $(".bPage").hide();
    
         $("#alert").show();
    $(".hBox").show();
    $("#gnb").show();
    $("#tnb").show();
    $("#lnb").show();
    $(".callBox").show();
    $(".addBox").show();
    $("#banner").show();
    $(".aside").show();
    
    $(".left_btn").on("click",function(){
        var banner_li = $(".banner_box").children("li"),
                banner_li_width =  banner_li.width();
    banner_li.first().stop().animate({marginLeft:banner_li_width},s_time,function(){
            banner_li.css({marginLeft:0}).last().prependTo(".banner_box");  
        });
    });
    $(".right_btn").on("click",function(){
    var banner_li = $(".banner_box").children("li"),
            banner_li_width =  banner_li.width();   
    banner_li.first().stop().animate({marginLeft:-banner_li_width},s_time,function(){
            banner_li.css({marginLeft:0}).first().appendTo(".banner_box");  
        });
    });    
    $(".left_btn2").on("click",function(){
        var lnb_li = $(".lnb_box").children("li"),
                lnb_li_width =  lnb_li.width();
    lnb_li.first().stop().animate({marginLeft:lnb_li_width},s_time,function(){
            lnb_li.css({marginLeft:0}).last().prependTo(".lnb_box");  
        });
    });
      $(".right_btn2").on("click",function(){
    var lnb_li = $(".lnb_box").children("li"),
            lnb_li_width =  lnb_li.width();   
    lnb_li.first().stop().animate({marginLeft:-lnb_li_width},s_time,function(){
           lnb_li.css({marginLeft:0}).first().appendTo(".lnb_box");  
        });
    });    
    
}
 $(function() {
  $('.res-menu-button').click(function() {
    if ($('.res-menu').css("display") != "none") {
      $('.res-menu').slideUp(1000);
    }
    else {
      $('.res-menu').slideDown(1000);
    }
  });
});
var timer;
    // 일정한 시간가격을 두고 움직이는 기능
function startBtn(){ timer = setInterval('$(".right_btn").click()',s_time) };
startBtn();
/*function startBtn2(){ timer = setInterval('$(".right_btn2").click()',s2_time) };
startBtn2();*/
    //setInterval을 없애는 기능
function stopBtn(){ clearInterval( timer) };
$('#banner').on({'mouseover':stopBtn, 'mouseout':startBtn});
$('#lnb').on({'mouseover':stopBtn, 'mouseout':startBtn});
        var winWidth = $(window).width();
    win.on("resize",function(){
        if($(window).width() != winWidth){
            location.reload();
        };
        winResize();
    });
};