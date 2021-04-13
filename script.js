'use strict';

//drawer↓
$(document).ready(function() {
    $('#navToggle').on('click', function() {
        $('#drawer').toggleClass('show');
    })

//smoothscroll↓
$('a[href^="#"]').click(function(){
    //  $('.menuBoard a').click(function(){
        //スクロールのスピード
        let speed = 500;
    //    //リンク元を取得
        let href= $(this).attr("href");
        console.log(href);
    //    //リンク先を取得
        let target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        let header = $('header').height();
        //リンク先までの距離を取得,ヘッダーの高さを引く
        let position = target.offset().top-header;
        //スムーススクロール
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    //smoothscroll↑
            
// toTop↓
$('#toTop').hide();
$('#toTop').click(function(){
    $('html,body').animate({scrollTop:0},500,'swing');
});
$(window).scroll(function(){
    if($(window).scrollTop()>0){
        $('#toTop').fadeIn(1000);
    }else{
        $('#toTop').fadeOut(1000);
    }
});
// toTop↑

//				flexslider↓
$('.flexslider').flexslider({
    animation:'fade',
    slideshowSpeed:4500,
    animationSpeed:1500,
    controlNav:false,
    directionNav: false,
});
//				flexslider↑



			});
            //drawer↑
            
