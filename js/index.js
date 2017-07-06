

$(function(){
	//改变颜色
	var sssss=["img/index/sssr.png","img/index/ssss-2r.png","img/index/s-157r.png",
	"img/index/sr.png","img/index/s-159r.png ","img/index/efer.png ",
	"img/index/s-168r.png","img/index/s-163r.png",
	"img/index/s-166r.png","img/index/s-165r.png","img/index/s-160r.png","img/index/ss164r.png","img/index/ss-167r.png"]
	//hover的颜色
	var indsss=["img/index/sss.png","img/index/ssss-2.png","img/index/s-157.png",
	"img/index/s.png","img/index/s-159.png ","img/index/efe.png ",
	"img/index/s-168.png","img/index/s-163.png",
	"img/index/s-166.png","img/index/s-165.png","img/index/s-160.png","img/index/ss164.png","img/index/ss-167.png"];
	
	//怎么改hover改图片。思路，1.设置数组，img的地址，hover,获取他的下标，2，设置他的src,把数组的下标赋值给要改变的图形
	
	
	 //进去改变图形
	$(".imgddssa").hover(function(){ //$(".imgddssa") 有时只获取一个
		var indessdf=$(this).index(".imgddssa"); //全局查找下标index(".imgddssa")
		$(this).attr("src",sssss[indessdf]); //怎么取数组下标，用[]和.
		$(".mina-pppppp").css("color","white").eq(indessdf).css("color","red");
		
	},function(){
		//离开还原图形
		var indessd=$(this).index(".imgddssa");
		$(this).attr("src",indsss[indessd]);
		
	});
	
	/*为什么选不中图片，有点下标选不中，因为你选的对象有问题，设置的是id，id是唯一的，所以选不中，换个角度
	想,可以给设置类名,不是设置id,点击就给他类名,$(".imgddssa").只选中一个,要在下标里存放它的对象,选的全局对象。都会被选中*/
	/*为什么他有的为什么点击改变不了.检查上面的样式,上面的高度进行覆盖.把它遮住了*/
	$(".imgddssa").click(function(){
	var indessdf=$(this).index(".imgddssa");
  $(".mian-qie-imgds").hide().fadeIn(1000).eq(indessdf).show().fadeOut(1000);
  $(".mina-pppppp").css("color","white").eq(indessdf).css("color","red");
 	
});

	
});




 //点击回到顶部
 $(function(){
 	$(".mian-dian").click(function(){
			
		$("html,body").stop().animate({scrollTop:0},800);
	});
 });
	


  /*数字增长*/
      window.onload = function() {
      	
        /*	获取当前的视口的头部，为什么要减去呢*/
      	var tops = $('.index_sz').offset().top-350; /*- 350;*/
      	$(document).scroll(function() {
      		
      		var tt = $(this).scrollTop();
      		//获取它滚动条的距离
      		//定义空的变量从零开始
      		var num = 0;
      		var num1 = 0;
      		var num2 = 0;
      		var num3 = 0;
				
      		//数字增长
      		/*判断滚动条的距离大于窗口的视角,就开始计时*/
      		if(tt >= tops) {
      			var timer = setInterval(function() {
      				num++;
      				//为什么要获取num.把num给$('.zz1');
      				$('.zz1').text(num);
      				if(num >= 20) {
      					clearInterval(timer);
      					$(document).off("scroll"); //移除事件，为什么移除
      					$('.zz1').text("20+");
      				}

      			}, 30);

      			var timer1 = setInterval(function() {
      				num1 = num1 + 15;
      				$('.zz2').text(num1);
      				if(num1 >= 1000) {
      					clearInterval(timer1);
      					$(document).off("scroll");
      					$('.zz2').text("1000+");
      				}

      			}, 10);

      			var timer2 = setInterval(function() {
      				num2 = num2 + 5;
      				$('.zz3').text(num2);
      				if(num2 >= 500) {
      					clearInterval(timer2);
      					$(document).off("scroll");
      					$('.zz3').text("500+");
      				}

      			}, 10);

      			var timer3 = setInterval(function() {
      				num3++;
      				$('.zz4').text(num3);
      				if(num3 >= 8) {
      					clearInterval(timer3);
      					$(document).off("scroll");
      					$('.zz4').text("8");
      				}

      			}, 130);

      		}

      	});

      }
