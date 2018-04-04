var startx, starty, movex, movey, endx, endy, totalx, totaly, angle;//touch用的变量
var page = 1;//初始页
var page_count = 4;//页数
var $wrap=$(".wrap");
var $wrapUl = $(".wrap ul");//捕获要移动的元素
var v_width=$wrap.width();//移动位置
$wrapLi=$(".wrap li");
//下一页
var NextPage = function () {
	if (!$wrapUl.is(":animated")) {
		if (page == page_count) {
			$wrapUl.animate({ left: '0px' }, "slow");
			page = 1;
		}
		else {
			$wrapUl.animate({ left: '-=' + v_width }, "slow");
			page++;
		}
	}
}
//上一页
var PrevPage=function(){
	if (!$wrapUl.is(":animated")) {
		if (page == 1) {
			$wrapUl.animate({ left: '-=' + v_width * (page_count - 1) }, "slow");
			page = page_count;
		}
		else {
			$wrapUl.animate({ left: '+=' + v_width }, "slow");
			page--;
		}
	}
} 
//touch事件
var  touchs=function(event){
	if (event.type == "touchstart") {
		console.log('开始');
		var touch = event.touches[0];
		startx = Math.floor(touch.pageX);
		starty = Math.floor(touch.pageY);
		startPostion = $wrapUl.position().left;
	}
	else if (event.type == "touchmove") {
		var touch = event.touches[0];
		movex = Math.floor(touch.pageX);
		movey = Math.floor(touch.pageY);
		touchMoveX=movex-startx;//手指移动x距离
		touchMoveY=movey-starty;
    //鼠标跟随移动
		if (touchMoveX!=0){
			$wrapUl.css("left", touchMoveX + startPostion);
		}

	}
	else if (event.type == "touchend" || event.type == "touchcancel") {
		endx = Math.floor(event.changedTouches[0].pageX);
		endy = Math.floor(event.changedTouches[0].pageY);
		console.log('结束');
		totalx = endx - startx;
		totaly = endy - starty;

		angle = Math.atan2(totaly, totalx) * 180 / Math.PI;
		if (angle < 45 && angle >= -45 && touchMoveX) {
			//向右滑动
			if (Math.floor(touchMoveX)>100){
				$wrapUl.css("left", startPostion);
				PrevPage();
			}
			else {
				$wrapUl.animate({ left: startPostion }, "slow");
			}
		} else if ((angle <= 180 && angle >= 135) || (angle >= -180 && angle < -135)) {
			//向左边滑动
			if (Math.floor(touchMoveX) <-100){
				$wrapUl.css("left", startPostion);
				NextPage();
				}
			else{
				$wrapUl.animate({ left: startPostion }, "slow" );	
			}
		} 
	}
}



$(function () {	
	$wrapLi.each(function(){
		this.addEventListener('touchstart', touchs, false);
		this.addEventListener('touchmove', touchs, false);
		this.addEventListener('touchend', touchs, false);
	});
	
	
});
