$(function(){
	
	var N=0;
	var MOVE=0;

	function NEXT(){
		
		if(N<$("#BANNER li").length-1){
			N += 1;
		}else{
			N=0;
		}
		
		CHANGE();
		
		START();
		
	}
	
	$("#BANNER, #NUMBER").on("mouseover", function(){ 
	
		$("#NUMBER li div").eq(N).stop().css({width:"100%"});
		
	}).on("mouseout", function(){
		
		START();
		
	});
	
	$("#NUMBER li").on("click", function(){
		
		if($(this).index() == N) return;
		
		N = $(this).index();
		MOVE = N*300*-1;
		
		CHANGE();
	});
	
	function START(){
		
		$("#NUMBER li div").eq(N).stop().css({width:"100%"}).animate({width:"0%"},3000,NEXT);	
		
	}
	
	function CHANGE(){
		
		$("#BANNER li.NOW").stop().animate({top:-300},500);
		$("#BANNER li").eq(N).stop().css({top:300}).animate({top:0},500,OK);
		$("#NUMBER li").removeClass().eq(N).addClass("NOW").find("div").css({width:"100%"});
		
	}
	
	function OK(){
		
		$("#BANNER li").removeClass().eq(N).addClass("NOW");	
	}
	
	START()
	
});