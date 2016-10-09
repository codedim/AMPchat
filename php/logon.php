<?php

session_start();

if (!isset($_SESSION['userId']))
{

	echo ': You must to login first!';

}


?>