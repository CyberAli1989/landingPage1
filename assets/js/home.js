$(function () {
    $("#goTop").hide();
    //  sticky navbar ;
    $(window).scroll(function (e) {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50 && $(window).scrollTop() <= 130) {
            $("nav#navigation").hide();
        }
        if ($(window).scrollTop() > 100) {
            $("nav#navigation").show("fast").slideDown(400).addClass("stick");
            $("#goTop").show();
        } else {
            $("nav#navigation").removeClass("stick").show();
            $("#goTop").hide();

        }
    });
    // mobile navbar

    let isOpen = false;
    $("#mobileMenu").on("click", function (e) {
        if (!isOpen){
            $("ul.nav").slideDown();
            $(this).removeClass("fa-navicon").addClass("fa-close");
            $("nav").addClass("mobileMenu");
        }else{
            $("ul.nav").slideUp();
            $(this).addClass("fa-navicon").removeClass("fa-close");
            $("nav").removeClass("mobileMenu");

        }
        isOpen = !isOpen
    });
    // move top
    $('#goTop').click(function (e) {
        e.preventDefault();
        $('html').scrollTop(0);
    })

})