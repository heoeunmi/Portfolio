$(document).ready(function () {

    $(".tab_con > li:nth-child(2)").hide();
    $(".tab_btn > li").click(function () {
        let idx = $(this).index();
        $(".tab_con > li").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().toggleClass("on");
    });
});