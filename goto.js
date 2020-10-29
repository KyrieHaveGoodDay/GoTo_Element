$("*").each(function (index, element) {
    $(this).click(function (e) { 
        // 這裡的attr("string") 括號裡面要雙引號
       var target = $(this).attr("data-gt-target");
       var duration = $(this).attr("data-gt-duration");
       var offset = $(this).attr("data-gt-offset");


    //排除其他沒選擇到的element會出現undefined
    if (target) {

        // console.log("目標:"+target);
        // console.log("目標:"+duration);
        // console.log("目標:"+offset);
        
        // offset() 是一個方法要加括號
        // 後面接位置:top left
        var top = $(target).offset().top;
        // console.log("要前往的目標:"+top);
        // .animate 是動畫，可以放一些css元素 Ex: "with" "10px"
        // .stop 移動的時候使用滾輪，畫面會閃爍
        $("html").stop().animate({
            // scrollTop 捲動的語法
            scrollTop:top -offset
            // parseInt string轉int
        },parseInt(duration));
    }   
      
        
    });
    
});


// mousewheel 滑鼠滾輪
// 在移動的過程，使用滑鼠滾輪，停止移動，以滾輪為主
$("html").on("mousewheel", function () {
    $("html").stop();
    
});