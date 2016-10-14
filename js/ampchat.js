/*
**  Main Blocks' behaviour and account control module
*/

// important CSS constants
const LAYOUT_PORTRAIT  = 480; 	// portrait to landscape layout threshold
const LAYOUT_LANDSCAPE = 800; 	// landscape to desktop layout threshold
const MAIN_BLOCK_WIDTH = '80%';
const SIDE_BLOCK_WIDTH = '20%';

// add event listeners
window.addEventListener('load', adjustBlocks);
window.addEventListener('resize', adjustBlocks);

// main elements
var html  = document.getElementsByTagName('html')[0];
var body  = document.getElementsByTagName('body')[0];
var chatWrapper  = document.getElementById('ChatWrapper');
// account elements
var shadowScreen = document.getElementById('ShadowScreen');
var accountBlock = document.getElementById('AccountBlock');
// main blocks
var mainBlock    = document.getElementById('MainBlock');
var sideBlock    = document.getElementById('SideBlock');
// sidebar elements
var profileBtn     = document.getElementById('ProfileBtn');
var sidebarBtn     = document.getElementById('SidebarBtn');
var addSidebarBtn  = document.getElementById('AddSidebarBtn');
// userlist scroll button
var scrollUserlist = document.getElementById('ScrollUserlist');


/*****************************  Resize Corrector  *****************************/

// removes the all slider styles
function delSliderStyels() {
	mainBlock.removeAttribute('style');
	sideBlock.removeAttribute('style');
	sidebarBtn.removeAttribute('style');
	addSidebarBtn.removeAttribute('style');
}

// corrects styles of some blocks after resizing
function adjustBlocks() {
	// if 'chatWrapper' is a root (non build-in) block, 
	// it is necessary to ajust style of some tags here
	if (chatWrapper.parentNode === body) {
		// no margins from body
		body.style.margin = 0;
		// set a whole chat to 100% viewport height
		chatWrapper.style.height = '100vh';
	}

	// vertical ajustments of Accoun block
	if (chatWrapper.clientHeight > accountBlock.clientHeight) {
		var blockTop = Math.round((chatWrapper.clientHeight - 
			accountBlock.clientHeight) / 2);
		accountBlock.style.marginTop = blockTop + 'px';
	} else {
		accountBlock.style.marginTop = '0px';
	}

	// once a sideBlock animation (see bellow) has been 
	// appled, some DOM elements will include inline 
	// styles. these most priority styles will override 
	// the stylesheet rules. we should repair them back.
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
function slideBlock() {
	(shiftTo == 'left') ? blockPos -= SHIFT_INT : blockPos += SHIFT_INT;


	if (shiftTo == 'left' && Math.abs(blockPos) >= sideBlock.clientWidth) {
	/// left shifting is done
		clearInterval(intervId);
		scrollUserlist.style.display = 'none';
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
function slideSidebar() {
	// if JS inline styles have not been applied yet
	if (sidebarBtn.style.backgroundImage == '') {
		var blockStyles = window.getComputedStyle(sideBlock, null);
		sideBlock.style.left = blockStyles.getPropertyValue('left');

		blockStyles = window.getComputedStyle(sidebarBtn, null);
		leftArrowUrl = blockStyles.getPropertyValue('background-image');

		blockStyles = window.getComputedStyle(addSidebarBtn, null);
		rightArrowUrl = blockStyles.getPropertyValue('background-image');

		sidebarBtn.style.backgroundImage = leftArrowUrl;
	}
	clearInterval(intervId); // just in case;

	// choose to show or hide sideBlock, left or right sliding
	if (sidebarBtn.style.backgroundImage == leftArrowUrl) {
	/// shift to the left
		sidebarBtn.style.backgroundImage = rightArrowUrl;
		blockPos = 0;
		shiftTo = 'left';

		intervId = setInterval(slideBlock, TIMER_INT);
		addSidebarBtn.style.display = 'block';

		sideBlock.style.position = 'absolute';
		mainBlock.style.width = '100%';
	} else {
	/// shift to the right
		sidebarBtn.style.backgroundImage = leftArrowUrl;
		blockPos = -sideBlock.clientWidth;
		shiftTo = 'right';

		intervId = setInterval(slideBlock, TIMER_INT);
		addSidebarBtn.style.display = 'none';
	}
}


/*****************************  Account Control  ******************************/

// account block elements
var loginBlock = document.getElementById('Login');
var signupBlock = document.getElementById('Signup');
var passwordBlock = document.getElementById('Password');
var profileBlock = document.getElementById('Profile');

// shows Sign Up block
function newAccount() {
	if (loginBlock != null && signupBlock != null) {
		loginBlock.style.display = 'none';
		signupBlock.style.display = 'block';
	}
}

// shows Retrieve Password block
function getPassword() {
	if (loginBlock != null && passwordBlock != null) {
		loginBlock.style.display = 'none';
		passwordBlock.style.display = 'block';
	}
}

function showProfile() {
	if (profileBlock != null) {
		profileBlock.style.display = 'block';
		shadowScreen.style.display = 'block';
		adjustBlocks();
	}
}

function closeProfile() {
	shadowScreen.style.display = 'none';
	profileBlock.style.display = 'none';
}

function logOut() {
	var url = window.location.href;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		userAction: 'logout'
	}));
}

// login form validation
function validateLogin() {
	// fake login - fix it
	shadowScreen.style.display = 'none';
	loginBlock.style.display = 'none';
	return false;  
}
