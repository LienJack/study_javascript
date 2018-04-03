var startx, starty, movex, movey, endx, endy, totalx, totaly, angle;//touch用的变量
var page = 1;
var $parent = $("span.next").parents("div.v_show");
var $v_show = $parent.find("div.v_content_list");
var $v_content = $parent.find("div.v_content");
var v_width = $parent.width();
var len = $v_show.find("li").length;
var page_count = 4;
var NextPage = function () {
	if (!$v_show.is(":animated")) {
		if (page == page_count) {
			$v_show.animate({ left: '0px' }, "slow");
			page = 1;
		}
		else {
			$v_show.animate({ left: '-=' + v_width }, "slow");
			page++;
		}
		$parent.find("span").eq((page - 1)).addClass("current")
			.siblings().removeClass("current");
	}
}

var PrevPage=function(){
	if (!$v_show.is(":animated")) {
		if (page == 1) {
			$v_show.animate({ left: '-=' + v_width * (page_count - 1) }, "slow");
			page = page_count;
		}
		else {
			$v_show.animate({ left: '+=' + v_width }, "slow");
			page--;
		}
		$parent.find("span").eq((page - 1)).addClass("current")
			     .siblings().removeClass("current");
	}
}
var  touchs=function(event){
	if (event.type == "touchstart") {
		console.log('开始');
		var touch = event.touches[0];
		startx = Math.floor(touch.pageX);
		starty = Math.floor(touch.pageY);
	}
	else if (event.type == "touchmove") {
		var touch = event.touches[0];
		movex = Math.floor(touch.pageX);
		movey = Math.floor(touch.pageY);
		touchMoveX=movex-startx;
		touchMoveY=movey-starty;
		console.log(touchMoveX);
	/* 	if(touchMoveX==0){
			var v_showX = $(".test").position().top;
			x = x + x
		} */
	}
	else if (event.type == "touchend" || event.type == "touchcancel") {
		endx = Math.floor(event.changedTouches[0].pageX);
		endy = Math.floor(event.changedTouches[0].pageY);
		console.log('结束');
		totalx = endx - startx;
		totaly = endy - starty;

		angle = Math.atan2(totaly, totalx) * 180 / Math.PI;
		if (angle < 45 && angle >= -45) {
			console.log('右滑动');
			NextPage();
		} else if ((angle <= 180 && angle >= 135) || (angle >= -180 && angle < -135)) {
			console.log('左滑动');
			PrevPage();
		} 
	}
}



$(function () {	
 	$("span.next").click(function(){
		NextPage();
	});
	
	$("span.prev").click(function(){
		PrevPage();
	}); 
	var $pic = $(".v_content_list li");
	$pic.each(function(){
		this.addEventListener('touchstart', touchs, false);
		this.addEventListener('touchmove', touchs, false);
		this.addEventListener('touchend', touchs, false);
	});
	console.log($pic);
	
	
});
