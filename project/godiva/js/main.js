$(document).ready(function () {
    //depth2
    $(".depth2 , .nav_bg").hide();
    $(".gnb > li:not(:nth-child(n+5)").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".nav_bg").stop().fadeIn();
    });

    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".nav_bg").stop().fadeOut();
    });

    //search
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });

    $(".btn_close").click(function () {
        $(".search").fadeOut();
    });

    //mv
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 2500, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        speed: 1000, //슬라이드 넘어가는 속도 ms
        navigation: {
            nextEl: ".swiper-button-next", //다음 버튼
            prevEl: ".swiper-button-prev", // 이전 버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", //버튼 종류 설정 / bullets은 기본값 fraction 숫자로 / progressbar
            clickable: true, //버튼 클릭 여부 /  논리값은 "" '' 사용X
        },
        loop: true,
    });

    //menu
    const menu = new Swiper('.menu', {
        autoplay: {
            delay: 2500, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        speed: 1000, //슬라이드 넘어가는 속도 ms
        loop: true,
        slidesPerView: 5,
    });

    //popup
    $(".popup").hide();
    $(".play").click(function () {
        $(".popup").fadeIn();
    });
    $(".play").click(function () {
        $(".popup").fadeIn();
        $("body").css({ "overflow": "hidden" })
    });
    $(".popup_close").click(function () {
        $(".popup").fadeOut();
        $("body").css({ "overflow": "auto" })
    });

});