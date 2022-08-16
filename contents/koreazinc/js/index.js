$(document).ready(function(){

    //메인페이지
    $(".gnav li").hover(function(){
        $(this).find(".snav").stop(true,true).slideToggle(400);
    });

    $(".vbtn ul li:first-child span").addClass("vbtnbaron");
    

    var oldidx=0;
    var idx=0;
    var visual_n=$(".visual ul li").length;

    function changeV(idx){
        
        if(oldidx!=idx){
            $("h2").css({marginRight:"-150px"});
            $(".vt1").css({marginLeft:"-200px"});
            $(".vt2").css({marginLeft:"-200px"});
            $(".vt3").css({marginLeft:"-200px"});
            $(".visual ul li").eq(idx).stop(true,true).fadeIn(600);
            $(".visual ul li").eq(oldidx).stop(true,true).fadeOut(600);
            $(".visual ul li").eq(idx).find("h2").animate({marginRight:"0px"},1000).show();
            $(".visual ul li").eq(oldidx).find("h2").css({marginRight:"-150px"}).hide();
            $(".visual ul li").eq(idx).find(".vt1").animate({marginLeft:"0px"},1000).show();
            $(".visual ul li").eq(oldidx).find(".vt1").css({marginLeft:"-200px"}).hide();
            $(".visual ul li").eq(idx).find(".vt2").animate({marginLeft:"0px"},1000).show();
            $(".visual ul li").eq(oldidx).find(".vt2").css({marginLeft:"-200px"}).hide();
            $(".visual ul li").eq(idx).find(".vt3").animate({marginLeft:"0px"},1000).show();
            $(".visual ul li").eq(oldidx).find(".vt3").css({marginLeft:"-200px"}).hide();
            $(".vbtn ul li").eq(idx).addClass("vbtnact");
            $(".vbtn ul li").eq(oldidx).removeClass("vbtnact");
            $(".vbtn ul li span").eq(idx).addClass("vbtnbaron");
            $(".vbtn ul li span").eq(oldidx).removeClass("vbtnbaron");

        }
        oldidx=idx;
    }

    function changeVAuto(){
        idx++;
        if(idx>visual_n-1){
            idx=0;
        }
        changeV(idx);
    }

    timer=setInterval(changeVAuto,6000);

    $(".vbtn ul li").click(function(){

        clearInterval(timer);
        idx=$(this).index();
        changeV(idx);
        timer=setInterval(changeVAuto,6000);

    });

    $(".vbtn .start").hide();

    $(".vbtn .stop").click(function(){
        $(".vbtn .stop").hide();
        $(".vbtn .start").show();
        clearInterval(timer);
    });

    $(".vbtn .start").click(function(){
        $(".vbtn .start").hide();
        $(".vbtn .stop").show();
        timer=setInterval(changeVAuto,6000);
    });
    


    //제품 페이지
    oldpidx=0;
    
    $(".smenu>ul>li").click(function(){
        
        pidx=$(this).index();

        $(".smenu>ul>li").removeClass("insmenu");
        $(this).addClass("insmenu");
        $(".product_in_contents>li").eq(oldpidx).hide();
        $(".product_in_contents>li").eq(pidx).fadeIn(500);
        oldpidx=pidx;
    });

    


    //아연 이야기
    /* $(window).scroll(function(){
        $(".topbtn").text($(this).scrollTop());
    }); */
    $(window).scroll(function(){
        if($(this).scrollTop()>=800){
            $(".story_smenu ul").fadeIn();
        }else{
            $(".story_smenu ul").hide();
        }
        if($(this).scrollTop()>=1000 && $(this).scrollTop()<2400){
            $(".story_smenu ul .story_smenu_1").addClass("story_smenu_on");
        }else{
            $(".story_smenu ul .story_smenu_1").removeClass("story_smenu_on");
        }
        if($(this).scrollTop()>=2400 && $(this).scrollTop()<3217){
            $(".story_smenu ul .story_smenu_2").addClass("story_smenu_on");
        }else{
            $(".story_smenu ul .story_smenu_2").removeClass("story_smenu_on");
        }
        if($(this).scrollTop()>=3217 && $(this).scrollTop()<4000){
            $(".story_smenu ul .story_smenu_3").addClass("story_smenu_on");
        }else{
            $(".story_smenu ul .story_smenu_3").removeClass("story_smenu_on");
        }
        if($(this).scrollTop()>=4000 && $(this).scrollTop()<5067){
            $(".story_smenu ul .story_smenu_4").addClass("story_smenu_on");
        }else{
            $(".story_smenu ul .story_smenu_4").removeClass("story_smenu_on");
        }
        if($(this).scrollTop()>=5067 && $(this).scrollTop()<9999){
            $(".story_smenu ul .story_smenu_5").addClass("story_smenu_on");
        }else{
            $(".story_smenu ul .story_smenu_5").removeClass("story_smenu_on");
        }
    });

    $(".story_smenu ul .story_smenu_1").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"1000px"},700);
    });
    $(".story_smenu ul .story_smenu_2").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"2417px"},700);
    });
    $(".story_smenu ul .story_smenu_3").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"3271px"},700);
    });
    $(".story_smenu ul .story_smenu_4").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"4125px"},700);
    });
    $(".story_smenu ul .story_smenu_5").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"5147px"},700);
    });
    $(".story_smenu ul .topbtn").click(function(){
        $("body,html").stop(true,true).animate({scrollTop:"0px"},700);
    });




    //나눔경영
    $(".m2accordion dd:not(:first)").css("display","none");
    $(".m2accordion dt:first").addClass("selected");
    $(".m2accordion dl dt:first span").addClass("remove");


	
    $(".m2accordion dl dt").click(function(){
    
        $(this).find("+dd").stop(true,true).slideToggle(200);



        $(this).toggleClass("selected");
        $(this).find("span").toggleClass("remove");


            
    });
});