$(function () {
    $("#goTop").hide();
    let scrollTop = $(window).scrollTop();
    let elementOffsetSkill = $("#skill").offset().top - 300;
    let elementOffsetAchivement = $("#achivment").offset().top - 600;
    let distanceSkill = (elementOffsetSkill - scrollTop);
    let distanceAchivement = (elementOffsetAchivement - scrollTop);
        //  sticky navbar ;
    $(window).scroll(function (e) {

        if ($(window).scrollTop() > 50 && $(window).scrollTop() <= 120) {
            $("nav#navigation").hide();
        }
        if ($(window).scrollTop() > 100) {
            $("nav#navigation").show("fast").slideDown(400).addClass("stick");
            $("#goTop").show();
        } else {
            $("nav#navigation").removeClass("stick").show();
            $("#goTop").hide();
        }
        if ($(window).scrollTop() >= distanceSkill){
            $(".progressPhp").addClass("php")
            $(".progressHtml").addClass("Html")
            $(".progressCss").addClass("css")
        }
        if ($(window).scrollTop() >= distanceAchivement){
            $("#first").addClass("first");
            $("#second").addClass("second");
            $("#third").addClass("third");
            $("#forth").addClass("forth");
        }
        });
    // mobile navbar

    let isOpen = false;
    $("#mobileMenu").on("click", function (e) {
        if (!isOpen) {
            $("ul.nav").slideDown();
            $(this).removeClass("fa-navicon").addClass("fa-close");
            $("nav").addClass("mobileMenu");
            $("nav ul li a").click(function () {
                $("ul.nav").slideUp();
                $("#mobileMenu").addClass("fa-navicon").removeClass("fa-close");
                $("nav").removeClass("mobileMenu");
                isOpen = false
            })
        } else {
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
    });
    // skills bar
    $(".skillAmount").hide()
    setInterval(function () {
        $(".skillAmount").show()
    }, 1200);
    // counting achivemnts
    var counter = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var i = setInterval(function () {
        $('#achivment h2.first').html(a);
        $('#achivment h2.second').html(b);
        $('#achivment h2.third').html(c);
        $('#achivment h2.forth').html(d);

        // $('.box #counter h2').css('background-color', 'red');
        counter++;
        if (a == 135) {
            a = 135;
        } else {
            a++;
        }

        if (b == 135) {
            b = 135
        } else {
            b++
        }
        if (c == 200) {
            c = 200;
        } else {
            c++;

        }
        if (d == 5651) {
            d = 5651 ;
        } else {
            d++
        }

        if (counter == 2000000) {
            clearInterval(i);
        }
    }, 50);
    // filters
    $("#filtering .btn").bind('click', function () {
        $("#filtering .btn").removeClass('active');
        $(this).addClass('active');
        let cls = $(this).data('cat');
        if (cls == 'all') {
            $("#da-thumbs .item").slideDown(900);
        } else {
            $("#da-thumbs .item").slideUp(600, function () {
                setTimeout(function () {
                    $("#da-thumbs .item." + cls).slideDown(513);
                }, 100);
            });
        }
    });
    // close and open results
    let r1 = true;
    let r2 = false;
    let r3 = false;
    $(".r2").slideUp();
    $(".r3").slideUp();

    $(".rClose1").on("click", function (e) {
        if(!r1){
            $(".r1").stop().slideDown();
            $(".r2").stop().slideUp();
            $(".r3").stop().slideUp();
            $(".rClose1 i").removeClass("fa-plus").addClass("fa-minus")
            $(".rClose2 i").addClass("fa-plus").removeClass("fa-minus")
            $(".rClose3 i").addClass("fa-plus").removeClass("fa-minus")
            r1 = true;
            r2 = false;
            r3 = false;
        }
    })
    $(".rClose2").on("click", function (e) {
        if(!r2){
            $(".r1").stop().slideUp();
            $(".r2").stop().slideDown();
            $(".r3").stop().slideUp();
            $(".rClose1 i").addClass("fa-plus").removeClass("fa-minus")
            $(".rClose2 i").removeClass("fa-plus").addClass("fa-minus")
            $(".rClose3 i").addClass("fa-plus").removeClass("fa-minus")
            r1 = false;
            r2 = true;
            r3 = false;
        }
    })
    $(".rClose3").on("click", function (e) {
        if(!r3){
            $(".r1").stop().slideUp();
            $(".r2").stop().slideUp();
            $(".r3").stop().slideDown();
            $(".rClose1 i").addClass("fa-plus").removeClass("fa-minus")
            $(".rClose2 i").addClass("fa-plus").removeClass("fa-minus")
            $(".rClose3 i").removeClass("fa-plus").addClass("fa-minus")
            r3 = true;
            r1 = false;
            r2 = false;
        }
    })
})