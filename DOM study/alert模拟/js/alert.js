$(function(){
//		弹出窗口函数
		var simpleAlert=function(p,t,f){
		var $simpleAlert = $('<div class="simpleAlert">');
	    var $shelter = $('<div class="simpleAlertShelter">');
	    var $simpleAlertBody = $('<div class="simpleAlertBody">');
	    var $simpleAlertBodyClose = $('<img class="simpleAlertBodyClose" src="img/close.png" height="14" width="14"/>');
	    var $simpleAlertBodyContent = $('<p class="simpleAlertBodyContent">' + p+ '</p>');	
		var $btn1 = $('<button class="simpleAlertBtn simpleAlertBtn1">'+t+'</button>');
		var $btn2 = $('<button class="simpleAlertBtn simpleAlertBtn2">'+f+'</button>');
		$simpleAlertBody.append($simpleAlertBodyClose)
						.append($simpleAlertBodyContent)
						.append($btn1)
						.append($btn2);
		$simpleAlert.append($shelter).append($simpleAlertBody);			
		$("body").append($simpleAlert);
		$simpleAlertBody.show().animate({"marginTop":"-128px","opacity":"1"},300);
		
//		绑定事件
		$(".simpleAlertBtn1").click(function(){
			close('t');
		});
		
		$(".simpleAlertBtn2").click(function(){
			close('f');
		});
		
		$(".simpleAlertBodyClose").click(function(){
			close('c');
		});
		
		$(".simpleAlertShelter").click(function(){
			close('c');
		});
		
	}
	
//		关闭函数
		var close=function(s){
			console.log(s);
			if(s=='t'){
				$(".simpleAlert").remove();
				console.log("这是选项t");
			}
			else if(s=='f'){
				console.log("这是选项f");
				$(".simpleAlert").remove();
			}
			else{
				console.log("关闭");
				$(".simpleAlert").remove();
			}
				
		}
		//初始化内容
		
		$("#dblChoseAlert").click(function(){
			simpleAlert("hhhhhh","t","f");
		});
	    
	    $("#dblChoseAlert2").click(function(){
			simpleAlert("这是别的内容","t","f");
		});
	
});
