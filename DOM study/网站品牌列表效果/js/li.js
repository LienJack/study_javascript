$(function(){

	var $category=$("ul li:gt(5):not(:last)");
	
	
	var $toggleBtn=$('.showmore>a');
	$toggleBtn.click(function(){
		if($category.is(":visible"))
		{
			console.log("触发隐藏");
			$category.hide();
			$(this).find("span")
				.css("background","url(img/down.gif) no-repeat 0 0")
				.text("显示全部商品");
		$('ul li').removeClass();
		}
		else{
			console.log("触发显示")
			$category.show();
			$(this).find("span")
				.css("background","url(img/down.gif) no-repeat 0 0")
				.text("精简显示品牌");
			$('ul li').filter(":contains('佳能1'),:contains('佳能2'),:contains('佳能3')")
		          .addClass("promoted");
		}


		return false; 
	});
	
});




