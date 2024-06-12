// 서브메뉴 숨기기
$(document).ready(function () {
    $('.subMenu').hide();
    $('nav').mouseover(function () {
        $('.subMenu').stop().slideDown(300);
    }).mouseout(function () {
        $('.subMenu').stop().slideUp(300);
    })


    // 이미지슬라이드 페이드 인 페이드 아웃
    $('.imgSlide a:gt(0)').hide();

    setInterval(function () {
        $('.imgSlide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgSlide');
    }, 3000)

    // 레이어 팝업
    $('.notice li:first').click(function () {
        $('#modalWrap').addClass("active");
    });
    $('.btn').click(function () {
        $('#modalWrap').removeClass("active");
    });

});