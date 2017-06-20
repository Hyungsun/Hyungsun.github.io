function alertPop(){
    var alertBox = $("#alert"),
            alertBtn = alertBox.find("button");
    
    alertBtn.on("click",function(){
            var alertBox = $("#alert");
        alertBox.slideUp();
    })
};