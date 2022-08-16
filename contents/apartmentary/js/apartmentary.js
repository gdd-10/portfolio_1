$(document).ready(function () {
  showImg = 0;
  nextImg = 0;

  $(".visu_btn ul li").click(function () {
    nextImg = $(this).index();

    $("#visual>ul>li").eq(showImg).removeClass("visualshow");
    $("#visual>ul>li").eq(nextImg).addClass("visualshow");
    $(".visu_btn ul li").eq(nextImg).addClass("active");
    $(".visu_btn ul li").eq(showImg).removeClass("active");
    showImg = nextImg;
  });

  $("nav div").click(function () {
    $("nav ul li span").stop(true, true).slideToggle();
    return false;
  });
});
