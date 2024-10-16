$(document).ready(function () {

    $(".gnb_bg").hide();
    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".gnb_bg").stop().slideDown();
    });

    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".gnb_bg").stop().slideUp();
    });

    //사이트맵+모바일 영역 시작
    // 사이트맵영역
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").stop().fadeIn();
        $("body").css({ "overflow": "hidden" })
    });
    $(".all_close").click(function () {
        $(".all_wrap").stop().fadeOut();
        $("body").css({ "overflow": "auto" })
    });

    $('.all_depth2 li').mouseover(function () {
        $(this).siblings().find('a').css('opacity', '0.3');
    });
    $('.all_depth2 li').mouseout(function () {
        $('.all_depth2 li a').css('opacity', '');
    });


    //모바일gnb
    $(".mgnb_wrap").hide();
    $(".btn_sitemap").click(function () {
        if (window.innerWidth <= 768) {
            $(".all_wrap").hide();
            $(".mgnb_wrap").show().animate({
                "right": "0",
            }, 600);
        }
        $("body").css({ "overflow": "hidden" })
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            "right": "-100%",
        }, 600)
        $("body").css({ "overflow": "auto" })
    });

    $(".m_depth2").hide();
    $(".m_gnb > li").click(function () {
        $(this).find(".m_depth2").slideDown();
        $(this).siblings().find(".m_depth2").slideUp();
    });

    $('.m_depth2 li').mouseover(function () {
        $(this).siblings().find('a').css('opacity', '0.3');
    });
    $('.m_depth2 li').mouseout(function () {
        $('.m_depth2 li a').css('opacity', '');
    });

    //사이트맵+모바일 영역 종료


    // 다운로드창 팝업
    $(".popup_bg , .down_popup").hide();

    $(".download").click(function () {
        $(".popup_bg,.down_popup").fadeIn();
    });
    $(".down_btn1").click(function () {
        $(".popup_bg,.down_popup").fadeOut();
    });

});