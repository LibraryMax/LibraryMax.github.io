
var images = [];

images[0] = new Image();
images[0].src = 'me.jpg';

images[1] = new Image();
images[1].src = 'CohenWilkins.jpg';

images[2] = new Image();
images[2].src = 'grennlantern.jpg';

var step = 0;


function slideShow() {
	if (!document.images)
	return;
	document.getElementbyId('slide').src = images[step].src;
		if (step<2) {
			step++;
		}
		else {step=0;}
  setTimeout(function(){
	},2500);
}
   
slideShow();

