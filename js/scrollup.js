/// scroll up button
window.onload = function() { 

	var scrollUserlist = document.getElementById('ScrollUserlist'); 
	var userBlock = document.getElementById('UserList'); 

	scrollUserlist.onmouseover = function() { 
		scrollUserlist.style.opacity = 0.8;
		scrollUserlist.style.filter = 'alpha(opacity=90)';
	};

	scrollUserlist.onmouseout = function() {  
		scrollUserlist.style.opacity = 0.5;
		scrollUserlist.style.filter = 'alpha(opacity=50)';
	};

	scrollUserlist.onclick = function() { 
		smoothScrollTo(0, 1000); // scroll it to top in 1s
	};

	scrollUserlist.touchstart = function() { 
		smoothScrollTo(0, 1000); // scroll it to top in 1s
	};

	// show/hide button
	userBlock.onscroll = function () { 
		if (userBlock.scrollTop > 20) {
			scrollUserlist.style.display = 'block';
		} else {
			scrollUserlist.style.display = 'none';
		}
	};
	
	// scroll function
	smoothScrollTo = (function () {
		var timer, start, factor;
  
		return function (target, duration) {
			var offset = userBlock.scrollTop,
				delta  = target - userBlock.scrollTop; // Y-offset difference
			duration = duration || 1000;               // default 1 sec animation
			start = Date.now();                        // get start time
			factor = 0;
    
			if( timer ) {
				clearInterval(timer); // stop any running animations
			}
    
			function step() {
				var y;
				factor = (Date.now() - start) / duration; // get interpolation factor
				if( factor >= 1 ) {
					clearInterval(timer); // stop animation
					factor = 1;           // clip to max 1.0
				} 
				y = factor * delta + offset;
				userBlock.scrollTop += y - userBlock.scrollTop;
			}
    
			timer = setInterval(step, 20);
			return timer;
		};
	}());

};
