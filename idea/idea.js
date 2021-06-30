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

$('.none').click(function(){
	$('#video-area1').hide();
	$('#particles-js').hide();
	$('#video-area2').hide();
	$('#video-area3').hide();
})
$('.anime').click(function(){
	$('#particles-js').show();
	$('#video-area1').hide();
	$('#video-area2').hide();
	$('#video-area3').hide();
})
$('.movie1').click(function(){
	$('#video-area1').show();
	$('#particles-js').hide();
	$('#video-area2').hide();
	$('#video-area3').hide();
})
$('.movie2').click(function(){
	$('#video-area2').show();
	$('#particles-js').hide();
	$('#video-area1').hide();
	$('#video-area3').hide();
})
$('.movie3').click(function(){
	$('#video-area3').show();
	$('#particles-js').hide();
	$('#video-area1').hide();
	$('#video-area2').hide();
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



//くるくる回転文字
// rollAnimeにrollというクラス名を付ける定義
function RollAnimeControl() {
  $('.rollAnime').each(function () {
    let target = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let height = $(window).height();
    let childs = $(this).children();  //rollAnimeの子要素を取得
    if (scroll >= target - height) {
      $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
        if (i < 10) {         //10未満の場合
        $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delayを追加
        }else {             //10以上の場合
          let n = i / 10;       //ミリ秒指定なので10で割る
          $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
        }
      });
      
      $(this).addClass("roll"); //rollというアニメーションクラスを付与

    } else {
      $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
        $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
      });
      $(this).removeClass("roll");//rollというアニメーションクラスを除去
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  RollAnimeControl();
});
// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
	//spanタグを追加する
	let element = $(".rollAnime");
	element.each(function () {
	  let text = $(this).text();
	  let textbox = [];
	  text.split('').forEach(function (t, ir) {
		if (t !== " ") {
		  if (ir < 10) {
			textbox += '<span style="transition-delay:.' + ir + 's;">' + t + '</span>';
		  } else {
			let nr = ir / 10;
			textbox += '<span style="transition-delay:' + nr + 's;">' + t + '</span>';
		  }
  
		} else {
		  textbox += t;
		}
	  });
	  $(this).html(textbox);
	});
	// RollAnimeControl();
//   });
//くるくる回転文字




particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":125,//この数値を変更すると紙吹雪の数が増減できる
      "density":{
        "enable":false,
        "value_area":400
      }
    },
    "color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
    },
    "shape":{
      "type":"polygon",//形状はpolygonを指定
      "stroke":{
        "width":0,
      },
      "polygon":{
        "nb_sides":4//多角形の角の数
      }
      },
      "opacity":{
        "value":1,
        "random":false,
        "anim":{
          "enable":true,
          "speed":20,
          "opacity_min":0,
          "sync":false
        }
      },
      "size":{
        "value":5.305992965476349,
        "random":true,//サイズをランダムに
        "anim":{
          "enable":true,
          "speed":1.345709068776642,
          "size_min":0.8,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
      "speed":8,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom",//下に向かって落ちる
      "random":false,//動きはランダムにならないように
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      },
    },
    "retina_detect":true
  });





			});
            
