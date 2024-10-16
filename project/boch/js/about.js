$(document).ready(function () {

    $(".bg_gnb  .bread").hide();

    $(".bg_gnb li:nth-of-type(3) ").click(function () {
        $(".bg_gnb li i").toggleClass("active");
        $(".bread").slideToggle();
    });

}); //end