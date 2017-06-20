function popUp(){
     var popup = $("#popupBox1"),
                    tnb = $("#tnb"),
                    tnbUl = tnb.find("ul"),
                    tnbLi = tnbUl.children("li").eq(0),
                    mnb = $(".page-menu-bar"),
                    mnbUl = mnb.find("ul"),
                    mnbLi = mnbUl.children("li").eq(6);
            
            $("#popupBox1").hide();
              
              tnbLi.on("click",function(){
                  $("#popupBox1").show();
              })
              mnbLi.on("click",function(){
                  $("#popupBox1").show();
              });
            $(".close").on("click", function(){
                popup.fadeOut();
            });
            $(".close2").on("click",function(){
                $(this).parent().slideUp();
            });
};