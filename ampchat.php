<!DOCTYPE html>
<html><head>
<title>AMP Chat</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="ampchat.css">
<script src="maintenance.js"></script>
</head><body>
<div id="MainWrapper">
  <!-- user block -->
  <div id="AccountMenu"><?php include 'accountmenu.php'; ?></div>
  <div id="UserList"><?php include 'userlist.php'; ?></div>
  <!-- chat block -->
  <div id="ChatWrapper">
    <div id="MessageList"><?php include 'messagelist.php'; ?></div>
    <div id="RoomList"><?php include 'roomlist.php'; ?></div>
    <div id="InputArea"><?php include 'inputarea.php'; ?></div>
  </div> <!-- ChatWrapper -->
</div> <!-- MainWrapper -->
<script src="ampchat.js"></script>
</body></html>
