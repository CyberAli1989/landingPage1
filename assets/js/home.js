$(function () {
    $("#goTop").hide();
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
        $('#achivment h2#first').html(a);
        $('#achivment h2#second').html(b);
        $('#achivment h2#third').html(c);
        $('#achivment h2#forth').html(d);

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
    }, 1);
})