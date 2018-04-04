var startx, starty, movex, movey, endx, endy, totalx, totaly, angle;//touch用的变量
var page = 1;//初始页
var page_count = 4;//页数
var $wrap=$(".wrap");
var $wrapUl = $(".wrap ul");//捕获要移动的元素
var v_width=$wrap.width();//移动位置
$wrapLi=$(".wrap li");
//下一页
var NextPage = function (startPostion,totalx) {
	var startPostion=this.startPostion;//初始位置
	var totalx=this.totalx;//手部一共移动的位置
	var moveTo = (v_width + totalx);
	if (!$wrapUl.is(":animated")) {
		if (page == page_count) {
			$wrapUl.animate({ left: '0px' }, "slow");
			page = 1;
		}
		else {
			$wrapUl.css("left", startPostion+totalx);
			$wrapUl.animate({ left: '-=' + moveTo}, "slow");
			page++;
		}
	}
}
//上一页
var PrevPage = function (startPostion, totalx){
	var startPostion = this.startPostion;
	var totalx = this.totalx;
	var moveTo = (v_width - totalx);
	if (!$wrapUl.is(":animated")) {
		if (page == 1) {
			$wrapUl.animate({ left: '-=' + (v_width * (page_count - 1) + totalx)}, "slow");
			page = page_count;
		}
		else {
			$wrapUl.css("left", startPostion+totalx);
			$wrapUl.animate({ left: '+=' + moveTo }, "slow");
			page--;
		}
	}
} 
//touch事件
var  touchs=function(event){
	if (event.type == "touchstart") {
		var touch = event.touches[0];
		startx = Math.floor(touch.pageX);
		starty = Math.floor(touch.pageY);
		startPostion = Math.floor($wrapUl.position().left);
		startPostion = (parseInt(startPostion / v_width)) * v_width;//强行对齐
		console.log('startPostion:' + startPostion+"page:"+page);
		
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
			//手指向右滑动
			if (Math.floor(touchMoveX)>100){
				PrevPage(startPostion, totalx);
			}
			else {
				if (!$wrapUl.is(":animated")) {
					$wrapUl.animate({ left: startPostion }, "slow");
				}
			}
		} else if ((angle <= 180 && angle >= 135) || (angle >= -180 && angle < -135)) {
			//手指向左边滑动
			if (Math.floor(touchMoveX)<(-100)){
				NextPage(startPostion, totalx);
				}
			else{
				if (!$wrapUl.is(":animated")) {
						$wrapUl.animate({ left: startPostion }, "slow" );	
				}
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
