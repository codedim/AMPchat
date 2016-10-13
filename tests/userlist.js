
var userList = [];

userList[0] = { 
	name: 'Piter', 
	img: 'none', 
	userStatus: 'click clack',
	status: 'on', 
	friend: false,
	inRoom: false
};

userList[1] = { 
	name: 'John', 
	img: 'none', 
	userStatus: 'I\'m a dude..',
	status: 'on', 
	friend: false, 
	inRoom: false
};

userList[2] = { 
	name: 'Jenny', 
	img: 'none', 
	userStatus: 'Kitty girl',
	status: 'afk', 
	friend: true,
	inRoom: false
};

userList[3] = { 
	name: 'Celvin', 
	img: 'none', 
	userStatus: '',
	status: 'off', 
	friend: true,
	inRoom: false
};

userList[4] = { 
	name: 'Anonymous', 
	img: 'none', 
	userStatus: 'You shold not see me!',
	status: 'on', 
	friend: false,
	inRoom: false
};

/*******************************************************/

var i;
for (i = 0; i < userList.length; ++i) {
	console.log(userList[i].name);
}



