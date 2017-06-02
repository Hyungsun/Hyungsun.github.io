$(document).ready(function(){
            
    /* main menu jQuery */
    var gnb = $("#gnb"),
        gnbDl = gnb.find(".main"),
        gnbDt = gnbDl.children('dt'),
        gnbDd = gnbDl.children('dd');
    //var gnbDd = gnb.find("dd");
    

    gnbDd.hide();
    gnbDt.on("click",function(){
        /*var $this = $(this);*/
        
//        gnbOl.stop().slideUp();
        $(this).next('dd').stop().slideToggle();
    });
});

