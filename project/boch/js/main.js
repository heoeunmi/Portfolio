$(document).ready(function () {

    //mv
    const mv = new Swiper('.mv', {

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
            nextEl: ".mv .swiper-button-next",
            prevEl: ".mv .swiper-button-prev",
        },
        pagination: {
            el: ".mv .swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        loop: true,
        scrollbar: {
            el: ".mv .swiper-scrollbar",
            hide: false, // 슬라이드를 드래그 했을 때 보이는 여부
            dragSize: 200, // 드래그 w 사이즈
        },
    });

    //mv_btn 
    $(".play").hide();

    $(".pause").click(function () {
        mv.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });

    $(".play").click(function () {
        mv.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });


    //best
    const best_slide = new Swiper('.best_slide', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 2000,
        navigation: {
            nextEl: "#best .swiper-button-next",
            prevEl: "#best .swiper-button-prev",
        },
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
            el: "#best .swiper-pagination1",
            type: "fraction",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
        },
    });

    const best_paging = new Swiper('.best_slide', {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
            el: "#best .swiper-pagination2",
            type: "bullets",
        },
    });

    best_slide.controller.control = best_paging;





    //collcetion_bg
    const bullet = ['Bunny Tales', 'Audun', 'Old Luxembourg', 'Perlemor'];
    const colllection_btn = new Swiper('.collection_btn', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true // 슬라이드 될 때 사진이 서로 겹치지 않고 넘어가기
        },
        pagination: {
            el: "#collection .bg_btn",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (bullet[index]) + "</span>";
            },
        },

    });
    const collection_item = new Swiper('.collection_item_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,


    });

    colllection_btn.controller.control = collection_item;
    collection_item.controller.control = colllection_btn;


    //gurantee
    $(".gurantee .inner > div:nth-child(1)").addClass("active");
    $(".gurantee .inner > div").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});//end