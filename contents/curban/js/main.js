$(document).ready(function(){
    $("nav").css({"right":"-60%"});
	$(".close").hide();

	$(".mo_menu_btn").click(function(){  
        $("nav").stop(true,true).animate({"right":"0%"});
        $(".close").show();
        $(".mo_menu_btn").hide();
        $(".black_box").fadeIn();
    });

    $(".close").click(function(){  
        $("nav").stop(true,true).animate({"right":"-60%"});
        $(".close").hide();
        $(".mo_menu_btn").show();
        $(".black_box").fadeOut();
    });
});