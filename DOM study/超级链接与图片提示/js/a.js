$(function(){
	var x=10;
	var y=20;
	$("a.tooltip").mouseover(
		function(e){
			console.log("mouseover");
			this.myTitle=this.title;
			this.title="";
			var tooltip="<div id ='tooltip'>"+this.myTitle+"</div>";
			$("body").append(tooltip);
			$("#tooltip")
						.css({
							"top":(e.pageY+y)+"px",
							"left":(e.pageX+x)+"px"
						}).show("fast");
			
			
		}
	);
	
	$("a.tooltip").mouseout(
		function(){
			console.log("mouseout");
			this.title=this.myTitle;
		}
	);
});
