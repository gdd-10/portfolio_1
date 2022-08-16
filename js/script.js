window.onload = $(document).ready(function () {
  /* 페이지 섹션 스크롤 (걸림)움직임 */
  let scrolled = true;
  let sec_count = 0;
  let viewHeight = document.getElementById("main").clientHeight;
  let modal = 0;
  /* end, home 키 입력 시 인덱스 변수 값 변경*/
  document.onkeydown = function (e) {
    if (e.key == "End") {
      sec_count = 8;
      $(".nav_1").stop(true, true).slideDown();
      $(".nav_1").addClass("nav_g");
      $(".nav_1").find("h1").fadeOut();
      disignAni();
    }
    if (e.key == "Home") {
      sec_count = 0;
      $(".nav_1").stop(true, true).slideUp();
    }
  };

  $(".panel").each(function () {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      if (delta < 0 && scrolled && modal == 0) {
        // 마우스 휠 내릴 경우
        if (sec_count < 8) {
          scrolled = false;
          sec_count += 1;
          $("html, body")
            .stop(true, true)
            .animate({ scrollTop: viewHeight * sec_count }, 500, function () {
              scrolled = true;
            });
        }
      } else if (delta >= 0 && scrolled && modal == 0) {
        // 마우스 휠 올렸을 경우
        if (sec_count > 0) {
          scrolled = false;
          sec_count -= 1;
          $("html, body")
            .stop(true, true)
            .animate({ scrollTop: viewHeight * sec_count }, 500, function () {
              scrolled = true;
            });
        }
      }
      /* 휠에 반응하는 메뉴 */
      navOption();
    });
  });

  /* 메뉴 */

  /* 네비게이션 색, 메뉴다운*/
  function navOption() {
    if (sec_count > 0 && sec_count <= 2) {
      $(".nav_1").slideUp();
    }
    if (sec_count >= 3 && sec_count <= 7) {
      $(".nav_1").addClass("nav_w");
      $(".nav_1").removeClass("nav_g");
      $(".nav_1").slideDown();
      $(".nav_1").find("h1").fadeIn();
    }
    if (sec_count > 7) {
      $(".nav_1").addClass("nav_g");
      $(".nav_1").removeClass("nav_w");
      $(".nav_1").slideDown();
      $(".nav_1").find("h1").fadeOut();
    }
  }

  /* 메인페이지 이미지 클릭 시 페이지 이동 */
  $(".main_slide ul li").click(function (e) {
    switch (e.target.className) {
      case "img_1":
        sec_count = 8;
        scrollMoveDown();
        break;
      case "img_2":
        sec_count = 4;
        scrollMoveDown();
        break;
      case "img_3":
        sec_count = 8;
        scrollMoveDown();
        break;
      case "img_4":
        sec_count = 7;
        scrollMoveDown();
        break;
      case "img_5":
        sec_count = 8;
        scrollMoveDown();
        break;
      case "img_6":
        sec_count = 3;
        scrollMoveDown();
        break;
      case "img_7":
        sec_count = 6;
        scrollMoveDown();
        break;
      case "img_8":
        sec_count = 8;
        scrollMoveDown();
        break;
      case "img_9":
        sec_count = 5;
        scrollMoveDown();
        break;
      case "img_10":
        sec_count = 8;
        scrollMoveDown();
        break;
    }
  });

  /* top_btn */
  $(".top_btn, h1 img").click(function () {
    $("html, body").animate({ scrollTop: "0px" });
    sec_count = 0;
    $(".nav_1").slideUp();
  });

  const $menu = $("#main .nav_main ul li");

  function scrollMoveDown() {
    $("html, body")
      .stop(true, true)
      .animate({ scrollTop: $("section").eq(sec_count).offset().top });
    navOption();
  }
  //스크롤을 내려 페이지 이동할 때
  $menu.eq(0).click(function () {
    sec_count = 1;
    scrollMoveDown();
  });
  $menu.eq(1).click(function () {
    sec_count = 2;
    scrollMoveDown();
  });
  $menu.eq(2).click(function () {
    sec_count = 6;
    scrollMoveDown();
  });
  $menu.eq(3).click(function () {
    sec_count = 7;
    scrollMoveDown();
  });
  $menu.eq(4).click(function () {
    sec_count = 8;
    scrollMoveDown();
  });

  /* nav */

  const $nav = $(".nav_1 ul li");

  function dScrollMoveDown() {
    $("html, body")
      .stop(true, true)
      .animate({
        scrollTop: $("section").eq(sec_count).offset().top,
      });
    navOption();
  }
  $nav.eq(0).click(function () {
    sec_count = 1;
    dScrollMoveDown();
  });
  $nav.eq(1).click(function () {
    sec_count = 2;
    dScrollMoveDown();
  });
  $nav.eq(2).click(function () {
    if (sec_count <= 6) {
      sec_count = 6;
      scrollMoveDown();
    } else {
      sec_count = 6;
      dScrollMoveDown();
    }
  });
  $nav.eq(3).click(function () {
    if (sec_count <= 7) {
      sec_count = 7;
      scrollMoveDown();
    } else {
      sec_count = 7;
      dScrollMoveDown();
    }
  });
  $nav.eq(4).click(function () {
    if (sec_count <= 8) {
      sec_count = 8;
      scrollMoveDown();
    } else {
      sec_count = 8;
      dScrollMoveDown();
    }
  });
  /* 프로필 */

  /* skills 회전 */
  function skillRotate() {
    let $skills = $("#profile .profile_right>ul .skills ul li");

    if (sec_count == 1) {
      for (let i = 0; i < 5; i++) {
        setTimeout(function () {
          $skills
            .eq(i)
            .stop(true, true)
            .css({ transform: "rotateY(180deg)", background: "#eaeaea" });
          setTimeout(function () {
            $skills
              .eq(i)
              .find("img, .skillv")
              .stop(true, true)
              .css("display", "block");
            $skills
              .eq(i)
              .find(".skillname")
              .stop(true, true)
              .css("display", "none");
          }, 200);
        }, 400 + 200 * (i + 1));
      }
    } else {
      $skills
        .stop(true, true)
        .css({ transform: "rotateY(0deg)", background: "#98a287" });
      $skills.find("img, .skillv").stop(true, true).css("display", "none");
      $skills.find(".skillname").stop(true, true).css("display", "block");
    }
  }

  $(window).scroll(function () {
    skillRotate();
  });

  /* 퍼블리싱 인덱스 */

  /* publishing index click */
  $("#pub_index .index_text ul li")
    .find("span")
    .click(function () {
      sec_count = $(this).parent().index() + 4;
      $("html, body")
        .stop(true, true)
        .animate({ scrollTop: $("section").eq(sec_count).offset().top });
      navOption();
    });

  $("#pub_index .index_text ul li span").hover(
    function () {
      let pubIdx = $(this).parent().index();
      /* bg 부분 레이아웃 위치, 크기 변화*/
      $("#pub_index .pub_idx_bg ul li").eq(pubIdx).addClass("pub_bg_trans");
      $("#pub_index .pub_idx_bg ul li")
        .eq(pubIdx)
        .find("div")
        .stop(true, true)
        .fadeIn();
      /* img 부분 레이아웃 위치, 크기 변화 및 이미지 스크롤 */
      let imgIdxEq = $("#pub_index .pub_idx_img ul li").eq(pubIdx);
      let imgHeight = imgIdxEq.find("img").get(0).naturalHeight;

      imgIdxEq.addClass("pub_img_trans");
      imgIdxEq.find("img").stop(true, true).animate({ opacity: "1" });
      setTimeout(function () {
        imgIdxEq
          .find("img")
          .stop(true, true)
          .animate({ top: -imgHeight + 827 }, 4000);
      }, 1200);
    },
    function () {
      /* bg */
      $("#pub_index .pub_idx_bg ul li").removeClass("pub_bg_trans");
      $("#pub_index .pub_idx_bg ul li").find("div").stop(true, true).fadeOut();
      /* img */
      $("#pub_index .pub_idx_img ul li").removeClass("pub_img_trans");
      $("#pub_index .pub_idx_img ul li")
        .find("img")
        .stop(true, true)
        .animate({ opacity: "0" });
      $("#pub_index .pub_idx_img ul li")
        .find("img")
        .stop(true, true)
        .css({ top: "0" });
    }
  );

  /* 퍼블리싱 내용 부분//////////// */

  /* 100% 개인작업 부분 */

  /* 반응형 사이트 뷰 버튼 */
  $(".res_btn").click(function () {
    $(this).toggleClass("btn_shadow");
    $(".resview_btn").slideToggle();
  });

  /* 디테일뷰 버튼 */
  $(".detail_btn").click(function () {
    $(".detail_view").fadeIn();
    $(".detail_view .detail_img").animate({ left: "0%" });
    $("html").css({ overflowY: "hidden" });
    modal = 1;
    let sectionIdx = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .index();
    $(".detail_img ul li")
      .eq(sectionIdx - 4)
      .css({ display: "block" });
  });
  $(".close_btn").click(function () {
    $(".detail_view .detail_img").animate({ left: "-80%" });
    setTimeout(function () {
      $(".detail_view").fadeOut();
      $(".detail_img ul li").css("display", "none");
    }, 200);
    $("html").css({ overflowY: "scroll" });
    $(".responsive_btn").css("display", "none");
    modal = 0;
  });

  /* 반응형 디테일뷰 버튼 */
  $(".responsive_detail_btn").click(function () {
    $(".responsive_btn").css({ display: "block" });
  });
  $(".pc_btn").click(function () {
    $(".pc_page").css("display", "block");
    $(".tablet_page, .mobile_page").css("display", "none");
  });
  $(".tablet_btn").click(function () {
    $(".tablet_page").css("display", "block");
    $(".pc_page, .mobile_page").css("display", "none");
  });
  $(".mobile_btn").click(function () {
    $(".mobile_page").css("display", "block");
    $(".pc_page, .tablet_page").css("display", "none");
  });

  $(".responsive_btn").click(function () {
    $(".responsive_btn").find("span").removeClass("responsive_btn_click");
    $(".responsive_btn").addClass("afafaf").removeClass("fff");
    $(this).find("span").addClass("responsive_btn_click");
    $(this).addClass("fff").removeClass("afafaf");
    $(".detail_view").stop(true, true).animate({ scrollTop: "0px" });
  });
  /* 그래픽 디자인///////////// */

  $(".g-img li:not(.resview_btn)").click(function () {
    let idx = $(this).index();
    let clone1 = $(this).clone(true); /* .hide() */
    let clone3 = $(".g-img li:nth-child(3)").clone(true); /* .hide() */
    $();

    if (idx == 0) {
      $(this).replaceWith(clone3.fadeTo(500, 0.5));
      $("#g-design .g-img li.g-img_1").removeClass("designani1");
    }
    if (idx == 1) {
      $(this).replaceWith(clone3.fadeTo(500, 0.7));
      $("#g-design .g-img li.g-img_2").removeClass("designani2");
    }
    if (idx == 3) {
      $(this).replaceWith(clone3.fadeTo(500, 0.7));
      $("#g-design .g-img li.g-img_4").removeClass("designani4");
    }
    if (idx == 4) {
      $(this).replaceWith(clone3.fadeTo(500, 0.5));
      $("#g-design .g-img li.g-img_5").removeClass("designani5");
    }
    $(".g-img li:nth-child(3)").replaceWith(clone1.fadeTo(500, 0.9));
    $("#g-design .g-img li.g-img_3").removeClass("designani3");
  });

  /* 애니메이션 */
  /* 퍼블리싱 애니메이션 */
  function pubAni() {
    setTimeout(function () {
      $(".pub_content_text>li:nth-child(6) .anibar").css({ width: "0" });
    }, 500);
    setTimeout(function () {
      $("section")
        .eq(sec_count)
        .find(".pub_content_text>li:nth-child(6) .anibar")
        .css({ width: "100%" });
    }, 500);
  }
  /* 디자인 애니메이션 */
  function disignAni() {
    if (sec_count == 8) {
      $("#g-design .g-img li:nth-child(1)").addClass("designani1");
      $("#g-design .g-img li:nth-child(2)").addClass("designani2");
      $("#g-design .g-img li:nth-child(3)").addClass("designani3");
      $("#g-design .g-img li:nth-child(4)").addClass("designani4");
      $("#g-design .g-img li:nth-child(5)").addClass("designani5");
    } else {
      $("#g-design .g-img li").css({ opacity: "0" });
      setTimeout(function () {
        $("#g-design .g-img li").removeClass(
          "designani1 designani2 designani3 designani4 designani5"
        );
      }, 500);
    }
  }

  $(window).scroll(function () {
    pubAni();
    disignAni();
  });
  window.addEventListener("load", () => {
    sec_count = 0;
    dScrollMoveDown();
  });
});
