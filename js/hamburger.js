// $(document).ready(function(){
//     $('.hamburger').on('click', function(){
//         //$('.menu').addClass("open");
//         $('.menu').toggleClass("display");
//     });
// })

$('.hamburger').on('click', function(){

    if($('.menu').hasClass('.open')) {
        $('.menu').removeClass('.open');
    } else {
        $('.menu').addClass('.open');
    }

    $('.menu').toggleClass('.open');
});
