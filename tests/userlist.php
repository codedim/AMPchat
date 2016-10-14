<?php
	$json_file = file('userlist.json');
	foreach ($json_file as $line) {
		echo $line;
	}
?>
