$(document).ready(function () {
    const progressLine = document.querySelector('.autoplay-progress svg')
    const mv = new Swiper(".mv", {
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        speed: 1000,
        loop: true,
        /* on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress);
            }
        }, */
        effect: "fade",
    });

    $(".play-button").hide();
    $(".pause-button").click(function () {
        mv.autoplay.stop();
        $(".pause-button").hide();
        $(".play-button").show();
    });
    $(".play-button").click(function () {
        mv.autoplay.start();
        $(".play-button").hide();
        $(".pause-button").show();
    });

    AOS.init();

    /* $(".bussiness_con").eq(1).hide();
    $(".bussiness_con").eq(2).hide();
    $(".bussiness_img").click(function () {
        $(this).siblings().show();
        

    }); */

    // $(".bussiness_body > ul > li").eq(0).show();
    // $(".bussiness_body > ul > li > .bussiness_con").eq(1).hide();
    // $(".bussiness_body > ul > li > .bussiness_con").eq(2).hide();
    // $(".bussiness_img").click(function () {
    //     $(this).siblings().show();
    //     let indexNum = $(this).index();
    //     $(".bussiness_body > ul > li > bussiness_con:not(:eq(indexNum))").hide();
    // });

    $(".bussiness_body > ul > li").eq(0).addClass("active");
    // $(".bussiness_body > ul > li > .bussiness_con").eq(1).hide();
    // $(".bussiness_body > ul > li > .bussiness_con").eq(2).hide();
    $(".bussiness_body ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // 포토폴리오 
    const tab_img = new Swiper('.tab_img', {
        autoplay: {
            delay: 2000, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        speed: 2000, //슬라이드 넘어가는 속도 ms



        slidesPerView: 2.8, //한줄에 보이는 슬라이드 개숫, 기본값 = 모바일 개수
        spaceBetween: 30, // 사진 사이의 간격 px


        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
        },
    });

    $(".tab_con > li:nth-child(2)").hide();
    $(".tab_btn > li ").click(function () {
        let idx = $(this).index();
        $(".tab_con > li").eq(idx).show().siblings().hide();
        $(this).addClass("active").siblings().toggleClass("active");
    });

});