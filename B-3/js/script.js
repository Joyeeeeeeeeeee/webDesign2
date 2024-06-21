$(document).ready(function() {
    // $('.subMenu').hide();
    $('.mainMenu > li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(300);
    });

    var img = 2;
    var now = 0;

    start();

    function start() {
        $(".imgSlide>a").eq(0).siblings().animate({marginTop:"-100%"});

        setInterval(function(){
            now = now==img ? 0 : now+=1;
            $(".imgSlide>a").eq(now-1).animate({marginTop:"-100%"})
            $(".imgSlide>a").eq(now).animate({margin:"0"})
        },3000)
    }

    $('.notice li:first').click(function(){
        $('#modalWrap').addClass("active");
    })
    $('.btn').click(function(){
        $('#modalWrap').removeClass("active");
    })

})