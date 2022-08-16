$(document).ready(function(){
    
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
      
      setScreenSize();

    //menu
    $(".menu_btn").click(function(){
        $(".menu").stop(true,true).show();
        $(".menu ul li").stop(true,true).animate({opacity:"1"},500);
        $(".menu_circle").css({"transform":"scale(700)"});
        $("header").hide();
    })
    $(".menu_close_btn").click(function(){
        $(".menu").stop(true,true).fadeOut(500);
        $(".menu ul li").stop(true,true).animate({opacity:"0"},500);
        $(".menu_circle").css({"transform":"scale(1)"});
        $("header").show();
    })

   //visual_1 who we are
    $(".who_we_are").click(function(){
        $(".slide_txt1").stop(true,true).animate({width:"89%",height:"70%"}).css({"backdrop-filter":"blur(25px)","cursor":"unset"});    
        $(this).stop(true,true).fadeOut();
        $(".b_box").stop(true,true).fadeIn();
        $(".close").stop(true,true).fadeIn();
        $("header").stop(true,true).animate({opacity:"0.2"});
        $(".who_we_are_txt").stop(true,true).fadeIn(1700);
   });

    $(".close").click(function(){
        $(".slide_txt1").stop(true,true).animate({width:"120px",height:"35px"}).css({"backdrop-filter":"none","cursor":"pointer"});
        $(".who_we_are").stop(true,true).fadeIn();
        $(".b_box").stop(true,true).fadeOut();
        $(".close").stop(true,true).fadeOut();
        $("header").stop(true,true).animate({opacity:"1"});
        $(".who_we_are_txt").css("display","none");
   });

    $(".b_box").click(function(){
        $(".slide_txt1").stop(true,true).animate({width:"120px",height:"35px"}).css({"backdrop-filter":"none","cursor":"pointer"});
        $(".who_we_are").stop(true,true).fadeIn();
        $(this).stop(true,true).fadeOut();
        $(".close").stop(true,true).fadeOut();
        $("header").stop(true,true).animate({opacity:"1"});
        $(".who_we_are_txt").css("display","none");
   });


   /* modal */
    var oldimgidx = 0; 
    var imgidx = 0;
    

    function changeP(imgidx){
        $(".img_n .img_num").text(imgidx+1);
        $(".modal ul li").eq(oldimgidx).css({"display":"none"});
        $(".modal ul li").eq(imgidx).fadeIn(500);
        oldimgidx=imgidx;
    }

    $(".img_1_in ul li").click(function(){
        $(".modal").css({"display":"flex"});
        imgidx=$(this).index();
        changeP(imgidx);
    });
/* 제주 모달 화살표 */
    $(".modal .jeju_larrow img").click(function(){
        imgidx--;
        if(imgidx<0){
            imgidx=11;
        }
        changeP(imgidx);
    });

    $(".modal .jeju_rarrow img").click(function(){
        imgidx++;
        if(imgidx>11){
            imgidx=0;
        }
        changeP(imgidx);
    });
/* 여수 모달 화살표 */
    $(".modal .yeosu_larrow img").click(function(){
        imgidx--;
        if(imgidx<0){
            imgidx=13;
        }
        changeP(imgidx);
    });

    $(".modal .yeosu_rarrow img").click(function(){
        imgidx++;
        if(imgidx>13){
            imgidx=0;
        }
        changeP(imgidx);
    });

   $(".modal .swiper_close_btn img").click(function(){
    $(".modal").fadeOut();
    
    });

/* visit */
/* visit 버튼 색상 변경 및 내용 전환 */
    $(".visit_btn ul li:nth-child(1)").click(function(){
        $(".visit_btn ul li").removeClass("visit_btn-in");
        $(".visit_btn ul li").find("a").removeClass("visit_btn-in-a");
        $(this).addClass("visit_btn-in");
        $(this).find("a").addClass("visit_btn-in-a");
        $(".visit_in_yeosu").css({"display":"none"});
        $(".visit_in_gangneung").css({"display":"none"});
        $(".visit_in_jeju").fadeIn();
    });
    $(".visit_btn ul li:nth-child(2)").click(function(){
        $(".visit_btn ul li").removeClass("visit_btn-in");
        $(".visit_btn ul li").find("a").removeClass("visit_btn-in-a");
        $(this).addClass("visit_btn-in");
        $(this).find("a").addClass("visit_btn-in-a");
        $(".visit_in_jeju").css({"display":"none"});
        $(".visit_in_gangneung").css({"display":"none"});
        $(".visit_in_yeosu").fadeIn();
    });
    $(".visit_btn ul li:nth-child(3)").click(function(){
        $(".visit_btn ul li").removeClass("visit_btn-in");
        $(".visit_btn ul li").find("a").removeClass("visit_btn-in-a");
        $(this).addClass("visit_btn-in");
        $(this).find("a").addClass("visit_btn-in-a");
        $(".visit_in_yeosu").css({"display":"none"});
        $(".visit_in_jeju").css({"display":"none"});
        $(".visit_in_gangneung").fadeIn();
    });


/* location */
/* location 버튼 색상 변경 및 내용 전환 */
$(".location_btn ul li:nth-child(1)").click(function(){
    $(".location_btn ul li").removeClass("location_btn-in");
    $(".location_btn ul li").find("a").removeClass("location_btn-in-a");
    $(this).addClass("location_btn-in");
    $(this).find("a").addClass("location_btn-in-a");
    $(".location_in_yeosu").css({"display":"none"});
    $(".location_in_gangneung").css({"display":"none"});
    $(".location_in_jeju").fadeIn();
});
$(".location_btn ul li:nth-child(2)").click(function(){
    $(".location_btn ul li").removeClass("location_btn-in");
    $(".location_btn ul li").find("a").removeClass("location_btn-in-a");
    $(this).addClass("location_btn-in");
    $(this).find("a").addClass("location_btn-in-a");
    $(".location_in_jeju").css({"display":"none"});
    $(".location_in_gangneung").css({"display":"none"});
    $(".location_in_yeosu").fadeIn();
});
$(".location_btn ul li:nth-child(3)").click(function(){
    $(".location_btn ul li").removeClass("location_btn-in");
    $(".location_btn ul li").find("a").removeClass("location_btn-in-a");
    $(this).addClass("location_btn-in");
    $(this).find("a").addClass("location_btn-in-a");
    $(".location_in_yeosu").css({"display":"none"});
    $(".location_in_jeju").css({"display":"none"});
    $(".location_in_gangneung").fadeIn();
});

    
   
   
});