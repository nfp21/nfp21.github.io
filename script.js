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


/*indexslide↓*/
// let i = 0;
// let pictures = ['images/indexstair.jpg','images/indexlost.jpg','images/indexrain.jpg','images/indexwo.jpg'];
            
// function slide() {
	
// document.getElementById('mvi').src=pictures[i];
//  $('#mvi').fadeIn(500);
//     setTimeout(function(){
//         $('#mvi').fadeOut(500);
//     },3500);
// i++;
// if(i === pictures.length){
// i=0;
// }
// refresh();
// }

// function refresh() {
// setTimeout(slide,4500);
// }
// slide();
/*indexslide↑*/
        


			});
            //drawer↑
            
