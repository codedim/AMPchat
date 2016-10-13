
<div id="CurrentRoom" class="UserList">
</div> <!-- current room -->

<div id="GeneralRoom" class="UserList">
	<div class="UserBlock">
		<div class="StatusAway"> </div>
		<div class="UserAvatar"> </div>
			<span class="UserName">UserName</span><br>
			<span class="UserStatus">Some words about user</span>
		<div class="Retouch"> </div>
		<div class="UserAction"> </div>
	</div>
</div> <!-- general room -->

<div id="ScrollUserlist"> </div>

<script>
var i;
var list = document.getElementById('GeneralRoom');
for(i = 0; i < 6; ++i)
	list.innerHTML += list.innerHTML;
</script>
