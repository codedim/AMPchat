
<div id="Login">
	<h1>Log In</h1>
	<form method="post">
		<p><input type="text" name="user" size="30" placeholder="Nickname">
		<p><input type="password" name="passw" size="30" placeholder="Password">
		<p><input type="checkbox" name="remember" checked> remember me
		<input type="submit" class="submit" value="Log in">
	</form>
	<p><sub>Forgot your password? 
	  <a href="#" onclick="getPassword()">Get it back</a></sub>
	<p class="footer">New user? <a href="#" onclick="newAccount()">Join Us</a>
</div>

<div id="Signup">
	<h1>Sign Up</h1>
	<form method="post">
		<p><input type="text" id="Email" name="email" size="30" 
		  placeholder="Email address">
		<p><input type="text" name="newuser" size="30" placeholder="Nickname">
		<p><input type="password" name="passw" size="30" placeholder="Password">
		<p><input type="checkbox" name="remember" checked> remember me
		<input type="submit" class="submit" value="Sign up">
	</form>
	<p class="footer"> </p>
</div>

<div id="Profile">
	<h1>Your Profile</h1>
	<form enctype="multipart/form-data" method="post">
		<p>Say a few words about yourself:
		<p><input type="text" name="about" id="about" size="100" 
		  placeholder="Yeah, I'm Chuck Norris!">
		<p><input type="radio" name="gender" value="male"> male
		<input type="radio" name="gender" value="female"> female
		<input type="radio" name="gender" value="creature" checked> no matter
		<p>Please, upload your avatar:
		<input type="hidden" name="MAX_FILE_SIZE" value="30000">
		<p><input name="avatar" type="file"><br>
		<sub>JPEG, PNG, GIF (30K max)</sub>
		<p class="submit"><input type="submit" value="Save">
	</form>
	<form method="post">
	<input type="hidden" name="logout" value="logout">
	<p class="footer"><input type="submit" value="Log out">
	</form>
</div>
