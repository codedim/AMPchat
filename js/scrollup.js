// scroll-to-top button controller
window.onload = function() { 
	const ANIMATION_MAGIC = 20;

	var scrollListBtn = document.getElementById('ScrollUserListBtn');
	var userBlock = document.getElementById('UserList'); 

	// show/hide scroll button
	userBlock.onscroll = function () { 
		if (userBlock.scrollTop > 20) {
			scrollListBtn.style.display = 'block';
		} else {
			scrollListBtn.style.display = 'none';
		}
	};

	scrollListBtn.onclick    = function() { 
		scrollElemToTop(userBlock);
	}
	scrollListBtn.touchstart = function() {
		scrollElemToTop(userBlock);
	}
	
	// scroll function
	function scrollElemToTop(elem) {
		var timer, delta = elem.scrollTop / ANIMATION_MAGIC;

		function scrollStep() {
			elem.scrollTop -= delta;
		
			if (elem.scrollTop <= 0) {
				clearInterval(timer);
				elem.scrollTop = 0;
			}
		}
		timer = setInterval(scrollStep, ANIMATION_MAGIC);
	}

};
