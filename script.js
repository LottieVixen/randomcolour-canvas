var canvas, ctx, w, h, loc,slider,ratioElem;
var ratio = 50;

/* A function to return random number from min to max */
var getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get next pixel
var getnext = (location) => {
	if (location.x < w){
		return {x:location.x+1,y:location.y};
	} else {
		return {x:0,y:location.y+1};
	}
}

//slider stuff
var get = () => {
	return slider.value;
}
var set = (val) => {
	slider.value = val;
	slider.onchange();
}
var showVal = (val) => {
	ratioElem.innerText = val;
}

var main = () => {
	var r,g,b;
	const a = 255;

	while (loc.y <= h) {
		if (ratio == 0) {
			//if 0 (don't change ever)
			loc = getnext(loc);
			ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
			ctx.fillRect( 0, 0, w, h );
			break;
		} else if (ratio == 100) {
			//if 100, always change
			r = getRandomInt(0, 255);
			g = getRandomInt(0, 255);
			b = getRandomInt(0, 255);
			loc = getnext(loc);
			ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
			ctx.fillRect( loc.x, loc.y, 1, 1 );
			continue;
		}
		if(getRandomInt(0,100) > ratio){
			//stay same
			loc = getnext(loc);
			ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
			ctx.fillRect( loc.x, loc.y, 1, 1 );
		} else {
			//change
			r = getRandomInt(0, 255);
			g = getRandomInt(0, 255);
			b = getRandomInt(0, 255);
			loc = getnext(loc);
			ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
			ctx.fillRect( loc.x, loc.y, 1, 1 );
		}
	}
}

var init = () => {
	loc = {x:-1,y:0};
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	slider = document.getElementById('slider');
	ratioElem = document.getElementById('ratio');



	main();
}