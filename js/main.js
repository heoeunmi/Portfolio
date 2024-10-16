$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    responsiveWidth: 1200, // 반응형 옵션 1024이하에서 기본스크롤로 전환
    anchors: ['menu1', 'menu2', 'menu3', 'menu4'],
    onLeave: function (origin, destination, direction, trigger) {
      //구역 3를 도착 글자 색상 바꾸기
      if (destination == 3) {
        $('.gnb a , h1 a').css('color', '#3D80D9');
        $('#header').css('border-bottom', '#3D80D9 1px solid');
        //구역 3를 도착 글자 색상 바꾸기
      } else {
        $('.gnb a , h1 a').css('color', '#fff');
        $('#header').css('border-bottom', '#efefef 1px solid');
      }
    },
  });
  //port
  const swiper = new Swiper('.swiper', {

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#port .swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,

      },
      500: {
        slidesPerView: 1.2,

      },

      768: {
        slidesPerView: 1.5,

      },
      1200: {
        slidesPerView: 2,

      },
      1600: {
        slidesPerView: 3,

      },
    },
  });

  //contact
  const copyLink = document.getElementById('copyLink');
  const phoneNumber = '01074285524';

  copyLink.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("전화번호가 복사되었습니다!");

    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert("복사에 실패했습니다. 010-7428-5524 입니다");
    }
  });

  const copyLink2 = document.getElementById('copyLink2');
  const emailAddress = 'hem2882@naver.com';


}); /* end */