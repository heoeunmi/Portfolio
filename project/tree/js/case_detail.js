$(document).ready(function () {
    //slide
    const mockup = new Swiper('.mockup', {
        autoplay: {
            delay: 2000, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        speed: 2000, //슬라이드 넘어가는 속도 ms

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        slidesPerView: 3, //한줄에 보이는 슬라이드 개숫, 기본값 = 모바일 개수
        spaceBetween: 0, // 사진 사이의 간격 px
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    });


});