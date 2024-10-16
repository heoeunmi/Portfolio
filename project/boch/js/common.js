$(document).ready(function () {

    //gnb
    $(".depth2").hide();
    $(".gnb> li").mouseenter(function () {
        $(this).find(".depth2").stop().slideDown();
    });
    $(".gnb> li").mouseleave(function () {
        $(this).find(".depth2").stop().slideUp();
    });


    //search
    $(".search").click(function () {
        $(".search form").animate({ "width": "268px" });
        $(".search input[type=text]").focus();
    },);

    $(".search input[type=text]").on('blur', function () {
        $(".search form").animate({ "width": "0" });
    },);


    //ham
    $(".mbg").hide();
    $(".icon .ham_btn").click(function () {
        $(".mbg").fadeIn();
        $(".ham_wrap").animate({ "right": "0" }, 800)
    });
    $(".ham_close").click(function () {
        $(".mbg").fadeOut();
        $(".ham_wrap").animate({ "right": "-100%" }, 800)
    });



    //mgnb 
    $(".mdepth2").hide();
    $(".ham > li").hover(function () {
        $(this).find(".mdepth2").stop().slideDown();
        $(this).siblings().find(".mdepth2").stop().slideUp();
    });


    //gotop
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".gotop").fadeIn();
        }

        else {
            $(".gotop").fadeOut();
        }

    });


    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });
}); //end