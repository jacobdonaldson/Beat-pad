var firstNoise = document.getElementById('firstNote');
var secondNoise = document.getElementById('secondNote');
$(document).ready(function() {
    $("#menu").get(0).play();
});
$('#pad1').mousedown(function(){
    firstNoise.play();
});
$('#pad2').mousedown(function(){
  secondNoise.play();
});

