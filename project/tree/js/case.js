$(document).ready(function () {

    $(".tab_con > li:nth-child(n+2)").hide();
    $(".tab_btn > li").click(function () {
        let idx = $(this).index();
        $(".tab_con > li").eq(idx).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });


});