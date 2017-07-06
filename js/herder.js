var timer;
$(function(){
	//鼠标移入
	$("nav>ul>li>.ssds").mouseover(function(){
		clearTimeout(timer)
		var indexss=$(this).index("nav>ul>li>.ssds");
		//获取下标让他显示和隐藏
		$(".xia-ladd").hide().eq(indexss).show();
		//让父级向下显示
		$('.xia-la').slideDown(400);
	});
	//鼠标离开
	$("nav>ul>li>.ssds").mouseout(function(){
		timer = setTimeout(function  () {
			//父级向上卷动，如果上面不清除。先执行这个事件
			//，一直卷动，你是不是离开以后在卷动
			$('.xia-la').slideUp(400);
			
		},200)
		//触摸不到。我是不是要开启一次计时器，让他停留几秒。
		//移入她的子级清除计时器
	$(".xia-ladd").mouseover(function  () {
			
			clearTimeout(timer)
			
		})
		//移入，是不是要离开，在上卷起
		$(".xia-ladd").mouseout(function  () {
			$('.xia-la').slideUp(400);
		})
	});
	/*$("nav>ul>li>.ssds").mouseout(function(){
		$(".xia-ladd").hide();
	});*/
	
/*$(window).scroll(function() {
  if ($(this).scrollTop() >= 1) {
    $(".olu").css("opacity", "0");
   
  }
  if ($(this).scrollTop() >= $(".olu").height()) {
    $("olu").css("opacity", "0.5");
   
  }
  if ($(this).scrollTop() >= $(".olu").height() * 1.5) {
    $(".olu").css("opacity", "0.9");
    
  }
});*/

});
