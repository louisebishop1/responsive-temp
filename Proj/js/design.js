/* JavaScript Document */

var windowSize ='';
var windowWidth = 0;
var actualSize = 0;
var firstRun = true;


$(document).ready(function() {


alert('this is practice work');


checkBrowserSize ();
setInterval('checkBrowserSize()',1000);
$('header').css('background-image', 'none');
});

function checkBrowserSize (){
	windowWidth = window.outerWidth;
	var contentWidth =$('body').width();
	var sizeDiff = windowWidth - contentWidth;
	actualSize = windowWidth - sizeDiff;
	
	if(actualSize > 800){ newWindowSize = 'large';}
	if(actualSize <= 800 && actualSize > 500){ mewWindowSize = 'medium';}
	if(actualSize <= 500){ newWindowSize = 'small'; }
	
	//$('h1').html(windowWidth+' ('+contentWidth+'+'+sizeDiff+') '+' is " +newWindowSize);
	if(windowSize = newWindowSize) {
		windowSize = newWindowSize;
		loadHero();
	}
}

function animateHero() {
	if(firstRun) {
		firstRun = false;
		$('#hero img').imgpreload(function(){
			$('#hero .panel img').css({'opacity':0, 'right':'-100px'}).animate({opacity:1,'right':'0px'},2000);
			$('#hero .panel .caption').css({'opacity':0, 'left':'75%'}).animate({opacity:1,'left':'0px'},2000);
			
			var logoPosition = $('header a.logo').position();
			$('header a.logo').css({'opacity':0, 'top':'0px'}).delay(500).animate({opacity:1,'top':logoPosition.top+ 'px'},1000, function() {
				$(this).removeAttr('style');
			}
			
			
			);
			
			
			});
	}
	
function loadHero() {

if(windowSize == 'large') {
	
$('#hero').load('content/hero_content_large.html', function(){animateHero();});
}
if(windowSize == 'medium') {
	
$('#hero').load('content/hero_content_medium.html',function(){animateHero();} );
}
if(windowSize == 'small') {
	
$('#hero').load('');
}
	
}

}