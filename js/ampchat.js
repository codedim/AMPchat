/*
**  Main Blocks' behaviour module
*/

// important CSS constants
const LAYOUT_PORTRAIT  = 480; 	// portrait to landscape layout threshold
const LAYOUT_LANDSCAPE = 800; 	// landscape to desktop layout threshold
const MAIN_BLOCK_WIDTH = '80%';
const SIDE_BLOCK_WIDTH = '20%';

// add event listeners
window.addEventListener('load', adjustBlocks);
window.addEventListener('resize', adjustBlocks);

// get main block objects
var html  = document.getElementsByTagName('html')[0];
var body  = document.getElementsByTagName('body')[0];
var chatWrapper = document.getElementById('ChatWrapper');
var mainBlock   = document.getElementById('MainBlock');
var sideBlock   = document.getElementById('SideBlock');
var accountBtn  = document.getElementById('AccountBtn');
var accMenuBtn  = document.getElementById('AccMenuBtn');
var addMenuBtn  = document.getElementById('AddMenuBtn');


/*****************************  Resize Corrector  *****************************/

// removes the all slider styles
function delSliderStyels() {
	mainBlock.removeAttribute('style');
	sideBlock.removeAttribute('style');
	accMenuBtn.removeAttribute('style');
	addMenuBtn.removeAttribute('style');
}

// corrects styles of some blocks after resizing
function adjustBlocks() {
	// if 'chatWrapper' is a root (non build-in) block, 
	// it is necessary to ajust style of some tags here
	if (chatWrapper.parentNode === body) {
		body.style.margin = 0;
		// set a whole chat to 100% viewport height
		chatWrapper.style.height = '100vh';
	}

	// once a sideBlock animation (see bellow) has been 
	// appled, some DOM elements will include inline 
	// styles. these most priority styles will override 
	// the stylesheet rules. so, we should repair them.
	if (chatWrapper.clientWidth > LAYOUT_LANDSCAPE) {
		delSliderStyels()
	} else if (sideBlock.style.left[0] == '-') {
		// keep the sideBlock hidden
		sideBlock.style.left = -sideBlock.clientWidth + 'px';
	} else {
		delSliderStyels()
	}
}


/******************************  Sidebar Slider  ******************************/

// slider global variables
var intervId;			// interval ID
var blockPos;			// block position
var shiftTo; 			// shift direction

// and constants
const SHIFT_INT = 10;	// shift interval
const TIMER_INT = 20;	// timer intervar

// slides the sideBlock to left or right direction
function slideSidebar() {
	(shiftTo == 'left') ? blockPos -= SHIFT_INT : blockPos += SHIFT_INT;


	if (shiftTo == 'left' && Math.abs(blockPos) >= sideBlock.clientWidth) {
	/// left shifting is done
		clearInterval(intervId);
	} else if (shiftTo == 'right' && blockPos >= 0) {
	/// right shifting is done
		clearInterval(intervId);
		// fixing blocks styles
		sideBlock.style.left = '0px';
		if (chatWrapper.clientWidth > LAYOUT_PORTRAIT) {
			sideBlock.style.position = 'relative';
			mainBlock.style.width = MAIN_BLOCK_WIDTH;
		}
		return;
	}

	sideBlock.style.left = blockPos + 'px';
}

// urls to the arrow buttons images
var leftArrowUrl = '';
var rightArrowUrl = '';

// shows or hides the sideBlock
function showSidebar() {
	// if JS inline styles have not been applied yet
	if (accMenuBtn.style.backgroundImage == '') {
		var blockStyles = window.getComputedStyle(sideBlock, null);
		sideBlock.style.left = blockStyles.getPropertyValue('left');

		blockStyles = window.getComputedStyle(accMenuBtn, null);
		leftArrowUrl = blockStyles.getPropertyValue('background-image');

		blockStyles = window.getComputedStyle(addMenuBtn, null);
		rightArrowUrl = blockStyles.getPropertyValue('background-image');

		accMenuBtn.style.backgroundImage = leftArrowUrl;
	}
	clearInterval(intervId); // just in case;

	// choose to show or hide sideBlock, left or right sliding
	if (accMenuBtn.style.backgroundImage == leftArrowUrl) {
	/// shift to the left
		accMenuBtn.style.backgroundImage = rightArrowUrl;
		blockPos = 0;
		shiftTo = 'left';

		intervId = setInterval(slideSidebar, TIMER_INT);
		addMenuBtn.style.display = 'block';

		sideBlock.style.position = 'absolute';
		mainBlock.style.width = '100%';
	} else {
	/// shift to the right
		accMenuBtn.style.backgroundImage = leftArrowUrl;
		blockPos = -sideBlock.clientWidth;
		shiftTo = 'right';

		intervId = setInterval(slideSidebar, TIMER_INT);
		addMenuBtn.style.display = 'none';
	}
}
