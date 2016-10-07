<!DOCTYPE html>
<html><head>
  <title>AMP Chat</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!-- Adaptive and cross-browser user interface stuff -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, 
    maximum-scale=1.0, user-scalable=no">
  <!--[if lt IE 9]> <script 
    src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js">
  </script> <![endif]-->
  <!-- Styles and adaptive behavior -->
  <style>body{margin: 0; padding: 0}</style>
  <!-- Because the MainChatWrapper block may be used as a build-in block, 
   It is no need to insert the Body tag style to AMPChat style sheets. -->
  <link rel="stylesheet" type="text/css" href="css/ampchat.css">
  <script src="js/maintenance.js"></script>
</head><body>
  <div id="MainChatWrapper">
    <!-- user block -->
    <div id="Logon">Logon<?php require 'php/logon.php'; ?></div>
    <div id="SideWrapper">
      <div id="AccountMenu">AccountMenu<?php include 'php/accountmenu.php'; ?></div>
      <div id="UserList">UserList<?php include 'php/userlist.php'; ?></div>
    </div>
    <!-- chat block -->
    <div id="ChatWrapper">
      <div id="MessageList">MessageList<?php include 'php/messagelist.php'; ?></div>
      <div id="RoomList">RoomList<?php include 'php/roomlist.php'; ?></div>
      <div id="InputArea">InputArea<?php include 'php/inputarea.php'; ?></div>
    </div> <!-- ChatWrapper -->
  </div> <!-- MainChatWrapper -->
  <script src="js/ampchat.js"></script>
</body></html>
