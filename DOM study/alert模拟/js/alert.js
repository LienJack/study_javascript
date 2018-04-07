var myConfirm=function(context,callback,config){

  config = {
  	cancelText: config && config.cancelText || "取消",
  	confirmText: config && config.confirmText || "确定",
  }

  var $simpleAlert = $('<div class="simpleAlert">');//wrap容器
  var $shelter = $('<div class="simpleAlertShelter">');//这是遮罩
  var $simpleAlertBody = $('<div class="simpleAlertBody">');//弹窗容器
  var $simpleAlertBodyClose = $('<img class="simpleAlertBodyClose" src="img/close.png" height="14" width="14"/>');
  var $simpleAlertBodyContent = $('<p class="simpleAlertBodyContent">' +context+ '</p>');//内容
  var $btn1 = $('<button class="simpleAlertBtn simpleAlertBtn1">'+config.confirmText+'</button>');//按钮1
  var $btn2 = $('<button class="simpleAlertBtn simpleAlertBtn2">'+config.cancelText+'</button>');//按钮2
  $simpleAlertBody.append($simpleAlertBodyClose)
				.append($simpleAlertBodyContent)
				.append($btn1)
				.append($btn2);
  $simpleAlert.append($shelter).append($simpleAlertBody);			
  $("body").append($simpleAlert);
  $simpleAlertBody.show().animate({"marginTop":"-128px","opacity":"1"},300);		
//		绑定事件
  $(".simpleAlertBtn1").click(function(){
    callback(true);
	$(".simpleAlert").remove();	
  });

  $(".simpleAlertBtn2").click(function(){
	callback(false);
	$(".simpleAlert").remove();
  });

  $(".simpleAlertBodyClose").click(function(){
	$(".simpleAlert").remove();
  });

  $(".simpleAlertShelter").click(function(){
	$(".simpleAlert").remove();
  });
		
	}
$(function(){
//提交
  $("#dblChoseAlert").click(function(){
    myConfirm("确定确定确定确定",
	  function (isConfirm) {
	    if (isConfirm) {console.log('已提交');} 
	  });
  });
//删除
  $("#dblChoseAlert2").click(function(){
    myConfirm("是否要删除", function (isConfirm) {
      if (isConfirm) {console.log('开始删除该数据')} 
      else{
      	console.log('取消了删除')
      }
  }, {
		cancelText: '不删除了',
		confirmText: '坚持删除'
	})
  });
	
});
