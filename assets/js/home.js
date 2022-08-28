$(function () {
  $(window).scroll(function (e) {
      console.log($(window).scrollTop());
      if ($(window).scrollTop()>50 && $(window).scrollTop() <= 130){
          $("nav#navigation").hide();
      }
      if ($(window).scrollTop() > 100){
        $("nav#navigation").show("fast").slideDown(400).addClass("stick");
    }else{
        $("nav#navigation").removeClass("stick").show();

    }
  })
})