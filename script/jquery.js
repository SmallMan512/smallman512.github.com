///**
// * Created by EDUASK on 2006/1/1 0001.
// */
//$(document).ready(function() {
//    $(".one").mouseenter( function(){
//       $(".center_left_1").css( "background","url(image/5.jpg) no-repeat");
//        $(".center_left_1 img").hide();
//    });
//
//    $(".two").mouseenter( function(){
//        $(".center_left_1").css( "background","url(image/2.jpg) no-repeat");
//    });
//    $(".three").mouseenter( function(){
//        $(".center_left_1").css( "background","url(image/3.jpg) no-repeat");
//    });
//
//    $(".four").mouseenter( function(){
//        $(".center_left_1").css(
//            //"background", "url(image/bg.jpg) no-repeat")
//            {
//                "background": "url(image/bg.jpg) no-repeat",
//                "width": "900px",
//                "height": "400px"
//            })
//    });
//});
$(document).ready(function(){
    //$(".lul li").mouseenter(function(){
    //     var val= $(".lul li").attr("class");
    //     var array=val.split(" ");
    //     alert(array[1]);
    //      $("").css({
    //        "background-color":"#ffff00",
    //        "cursor":"pointer"
    //                  });
    //       });
    $(".center_right li").mouseenter(function(){
      $(".center_right li").css("cursor","pointer");
    });

    $(".lul .one").mouseenter(function(){
          $(".one").css({
            "background-color":"#ff7115",
            "cursor":"pointer"
                      });
           });
    $(".lul .one").mouseleave(function(){
        $(".one").css({
            "background-color":"#ffffff"
        });
    });
    $(".lul .two").mouseenter(function(){
        $(".two").css({
            "background-color":"#ff7115",
            "cursor":"pointer"
        });
    });
    $(".lul .two").mouseleave(function(){
        $(".two").css({
            "background-color":"#ffffff"
        });
    });
    $(".lul .three").mouseenter(function(){
        $(".three").css({
            "background-color":"#ff7115",
            "cursor":"pointer"
        });
    });
    $(".lul .three").mouseleave(function(){
        $(".three").css({
            "background-color":"#ffffff"
        });
    });
    $(".lul .four").mouseenter(function(){
        $(".four").css({
            "background-color":"#ff7115",
            "cursor":"pointer"
        });
    });
    $(".lul .four").mouseleave(function(){
        $(".four").css({
            "background-color":"#ffffff"
        });
    });

});

