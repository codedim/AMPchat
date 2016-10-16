
// get userlist from the server
var userList = document.getElementById('PublicRoom');
if (userList != null) {
	// get userlist JSON 
	var url = 'http://' + window.location.host + 
		'/tests/userlist.php';
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.onreadystatechange = function() {
		try {
			// parse server response to JS array
			var users = JSON.parse(xhr.responseText);
		} catch (ee) {
			;
		}
		
		if (users != undefined) {
			sortUsers(users);
			// clear UserList block
		    userList.innerHTML = '';
			// fill UserList block out
			for (i = 0; i < users.length; ++i) {
				addUserToList(users[i]);
			}
		}
	}
	xhr.send(null);
}

// sorts users in list
function sortUsers(users) {
	// sort by name
	users.sort(function(a, b) {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
	// sort by friend
	var tmpObj;
	for (i = 1; i < users.length; ++i) {
		while (users[i].friend && !users[i - 1].friend) {
			tmpObj = users[i - 1];
			users[i - 1] = users[i];
			users[i] = tmpObj;
		}
	}
}

function addUserToList(user) {
	// set status: online, away, offline
	var status = 'StatusOffline';
	if (user.status == 'on') status = 'StatusOnline';
	if (user.status == 'afk') status = 'StatusAway';

	// set user icon (avatar)
	var icon = '';
	if (user.icon != null) { 
		icon = ' style="background-image: url(' + user.icon + ')"';
	}

	// is the user a friend?
	var friend = (user.friend) ? 'Friend' : '';
	// user specified status
	var userStatus = (user.userStatus != '') ? user.userStatus : '...';

	// user action type
	var action = '';
	if (user.banned) 
		action = 'Banned';
	else if (user.invited)
		action = 'Invited';
	else if (user.joined)
		action = 'Joined';
	
	// build UserBlock item
    userList.innerHTML += `	
	<div class="UserBlock">
		<div class="` + status + `"> </div>
		<div class="UserIcon"` + icon + `></div>
			<span class="UserName ` + friend + `">` + user.name + `</span><br>
			<span class="UserStatus">` + userStatus + `</span>
		<div class="Retouch"> </div>
		<div class="UserAction ` + action + `"> </div>
	</div>
`;

}
