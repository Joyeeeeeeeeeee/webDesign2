$(document).ready(function(){
    $('.subMenu').hide();
    $('.menu>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(360)
    }).mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(360)
    })

    var img = 2
    var now = 1

    $('.imgSlide>a').eq(0).siblings().animate({marginTop:"-400px"})

    setInterval(function(){
        now = img == now ? 0 : now+=1;
        $('.imgSlide>a').eq(now-1).animate({marginTop:"-400px"});
        $('.imgSlide>a').eq(now).animate({marginTop:"0"})
    },3000)

    $('.notice li:first').click(function(){
        $('#modalWrap').addClass("active");
    })
    $('.btn').click(function(){
        $('#modalWrap').removeClass("active");
    })
})  