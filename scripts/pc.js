$(document).ready(function () {
    $(".list_sub").hide();
    
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
    
    /* MOBILE 메뉴 토글 옵션 */
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".drop_toggle").slideToggle();
    });
    
    /* MOBILE SUB 토글 옵션 */
    $(".open_toggle").click(function() {
       $(".sub_toggle").slideToggle(); 
    });
    
    
    /* 스크롤시 scroll Top 이동 효과*/
     var    win = $(window),
            winWidth = win.width();
  
        win.scroll(function() {
            if ($(this).scrollTop() > 500) {
            $('.scroll-up-button').fadeIn();
        } else {
            $('.scroll-up-button').fadeOut();
        }
    });

    var scrollerButton = $('<div class="scroll-input-div"><a class="scroll-up-button" href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a></div>');
        scrollerButton.click(function() {
            $('html,body').animate({scrollTop: 0}, 800);
    return false;
  });

  $("#zionWrap").append(scrollerButton); 
    
});    

/* 메인 및 프로필 메뉴 효과 */
function headStyle() {
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
};

    /*********************************************

Author : EGrappler.com
URL    : http://www.egrappler.com
License: http://www.egrappler.com/license.

*********************************************/
    
    /* 차트 형식의 효과 */
(function ($) {
    $.fn.extend({
        jqbar: function (options) {
            var settings = $.extend({
                animationSpeed: 2000,
                barLength: 200,
                orientation: 'h',
                barWidth: 10,
                barColor: 'red',
                label: '&nbsp;',
                value: 100
            }, options);

            return this.each(function () {

                var valueLabelHeight = 0;
                var progressContainer = $(this);

                if (settings.orientation == 'h') {

                    progressContainer.addClass('jqbar horizontal').append('<span class="bar-label"></span><span class="bar-level-wrapper"><span class="bar-level"></span></span><span class="bar-percent"></span>');

                    var progressLabel = progressContainer.find('.bar-label').html(settings.label);
                    var progressBar = progressContainer.find('.bar-level').attr('data-value', settings.value);
                    var progressBarWrapper = progressContainer.find('.bar-level-wrapper');

                    progressBar.css({ height: settings.barWidth, width: 0, backgroundColor: settings.barColor });

                    var valueLabel = progressContainer.find('.bar-percent');
                    valueLabel.html('0');
                }
                else {
                }

                animateProgressBar(progressBar);

                function animateProgressBar(progressBar) {

                    var level = parseInt(progressBar.attr('data-value'));
                    if (level > 100) {
                        level = 100;
                        alert('max value cannot exceed 100 percent');
                    }
                    var w = settings.barLength * level / 100;

                    if (settings.orientation == 'h') {
                        progressBar.animate({ width: w }, {
                            duration: 2000,
                            step: function (currentWidth) {
                                var percent = parseInt(currentWidth / settings.barLength * 100);
                                if (isNaN(percent))
                                    percent = 0;
                                progressContainer.find('.bar-percent').html(percent + '%');
                            }
                        });
                    }
                    else {
                        var h = settings.barLength - settings.barLength * level / 100;
                        progressBar.animate({ top: h }, {
                            duration: 2000,
                            step: function (currentValue) {
                                var percent = parseInt((settings.barLength - parseInt(currentValue)) / settings.barLength * 100);
                                if (isNaN(percent))
                                    percent = 0;
                                progressContainer.find('.bar-percent').html(Math.abs(percent) + '%');
                            }
                        });

                        progressContainer.find('.bar-percent').animate({ top: (h - valueLabelHeight) }, 2000);
                    }
                }

            });
        }
    });
    })(jQuery);
