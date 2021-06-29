'use strict';


$(document).ready(function() {

$('.slide').click(function(){
	$('.sl').show();
	$('.mod,.sim,.spl').hide();
	$('.slide').css("fontSize","1.5rem");
	$('.modern,.simple,.split').css("fontSize","1rem");
})
$('.modern').click(function(){
	$('.sl,.sim,.spl').hide();
	$('.mod').show();
	$('.modern').css("fontSize","1.5rem");
	$('.slide,.simple,.split').css("fontSize","1rem");
})
$('.simple').click(function(){
	$('.sl,.mod,.spl').hide();
	$('.sim').show();
	$('.simple').css("fontSize","1.5rem");
	$('.slide,.modern,.split').css("fontSize","1rem");
})
$('.split').click(function(){
	$('.sl,.mod,.sim').hide();
	$('.spl').show();
	$('.split').css("fontSize","1.5rem");
	$('.slide,.modern,.simple').css("fontSize","1rem");
})
$('.deep').click(function(){
	$('#info').css('background-image','none')
	$('#info').css('background-color','#eeeeee');
	$('.deep').css("fontSize","1.5rem");
	$('.filter').css("fontSize","1rem");
})
$('.filter').click(function(){
	$('#info').css('background-color','none')
	$('#info').css('background-image','url(ideaimg/pedestrians-1209316_1920.jpg)');
	$('.filter').css("fontSize","1.5rem");
	$('.deep').css("fontSize","1rem");
})


$(window).scroll(function (){
    $('#info').each(function(){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();
        if (scroll > target - height){
			$('#changefv').hide();
			$('#changebc').show();
		  }else{
			$('#changefv').show();
			$('#changebc').hide();
		  }
    });
});


$(window).scroll(function (){
    $('.slidetext').each(function(){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();
        if (scroll > target - height){
			
			$(this).addClass("sar"); 
			$(this).children(".slidetextinner").addClass("sal"); 
		  }else{
			$(this).removeClass("sar");
			$(this).children(".slidetextinner").removeClass("sal");

		  }
    });
});



function extendappear(){
	$('.extendtrigger').each(function(){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();
        if (scroll > target - height){
			$(this).addClass('extend'); 
		  }else{
			$(this).removeClass('extend');
		  }
    });

	$('.bappeartrigger').each(function(){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();
        if (scroll > target - height){
			$(this).addClass('bappear'); 
		  }else{
			$(this).removeClass('bappear');
		  }
    });
}
$(window).scroll(function(){
	extendappear();
});



    
//テキストのカウントアップ+バーの設定
let bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定 1.0 なら100%まで描画
	$("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
	$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
	$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
	$("#splash").fadeOut();//#splashエリアをフェードアウト
});



			});
            
