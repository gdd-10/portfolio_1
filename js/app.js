window.onload = $(document).ready(function() {
  /* full page  */
  let scrolled = true;
  let sec_count = 0;
  let viewHeight = document.getElementById("main").clientHeight;
  let modal = false;

  /* navigation slide */
  function navOption () {
    if(sec_count > 0 && sec_count <= 2) {
      $(".nav_1").slideUp();
      
    }
  }


  /* wheel event */
  $(".panel").each(() => {
    /* 개별적으로 wheel 이벤트 적용 */
    $(this).on("wheel DOMMouseScroll", (e) => {
      e.preventDefault();
      let delta = 0;
      if(!event) event = window.event;
      if(event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opeara) delta = -delta;
      } else if (event.delta) delta = -event.detail / 3;
      if (delta < 0 && scrolled && modal) {/* 마우스 휠 내릴 경우 */
        if (sec_count < 8) {
          scrolled = false;
          sec_count += 1;
          $("html, body").stop(true, true).animate({scrollTop: viewHeight*sec_count}, 500, () => {
            scrolled = true;
          });
        }
      } else if (delta >= 0 && scrolled && modal) {//마우스 휠 올렸을 경우
        if(sec_count > 0) {
          scrolled = false;
          sec_count -= 1;
          $("html, body").stop(true, true).animate({scrollTop: viewHeight*(sec_count)}, 500, () => {
            scrolled = true;
          });
        }
      }
    });
  
  
  });




});