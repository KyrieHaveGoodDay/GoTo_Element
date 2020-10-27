$("*").each(function (index, element) {
    $(this).click(function (e) { 
        // 這裡的attr("string") 括號裡面要雙引號
       var target = $(this).attr("data-gt-target");
       var duration = $(this).attr("data-gt-duration");
       var offset = $(this).attr("data-gt-offset");
       console.log("目標:"+target);
       console.log("目標:"+duration);
       console.log("目標:"+offset);
        
    });
    
});