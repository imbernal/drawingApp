var color = $('.selected').css("background-color");
var $canvas = $('canvas');
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


$(".controls").on("click","li" ,function(){

	$(this).siblings().removeClass("selected");

	$(this).addClass("selected");

	color = $(this).css("background-color");

});

$('#revealColorSelect').click(function(){
	changeColor();
	$('#colorSelect').toggle();
});

function changeColor(){
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();

	$('#newColor').css('background-color', "rgb(" + r +"," + g + ","+ b+ ")");
}

$("input[type=range]").change(changeColor); 

$('#addNewColor').click(function(){

	var $newColor = $('<li></li>');

	$newColor.css("background-color" , $('#newColor').css('background-color'));

	$('.controls ul').append($newColor);

	$newColor.click();

});

$canvas.mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;

}).mousemove(function(event) {

	if (mouseDown){
		context.beginPath();
 		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
 		context.lineTo(event.offsetX,event.offsetY);
	 	context.stroke();
	 	context.strokeStyle = color;
 		lastEvent = event;	
	}
	
}).mouseup(function(event) {
	mouseDown = false;
}).mouseleave(function() {
	$canvas.mouseup();
});
