AMPchat (pre-alpha)
===================

What is AMPchat?
----------------

**AMPchat** is a cross-platform client-server application based on the 
commonly used **Apache + MySQL + PHP** software bundle. Thus, the stask 
of **PHP**, **JavaScript**, **SQL**, **HTML** and **CSS** languages is 
used to develop this service.

The web application is designed to provide to users a multi-chat service 
via web browser. Using the service, the user is able to get the following 
main features:

* sign up to the service;
* log in to your account;
* chat with any other users.


UI Specification
----------------

The main thing about the User Interface is it must be adaptive and have to 
adjusts to three types of user devices (smartphones, tablets and desktops) 
at least . A list of other basic User Interface features is represented below.

**Login maintenance:**

* A user does no have any chat function before he entered the service;
* The user can see other users --who are online-- only after logging in;
* The feature named 'Remember me' to be present on the logon page, the 
service must recognize users who has this option enabled;

**User invitations:**

* Once a user is logged in, he can see a list of users who are online;
* Users can invite online users of chat and accept invitations from others;
* Multi-chat (conference chat) feature - the user can invite a chat as 
many people as he likes;
* Invited users can go out from somebody's chat, only if they want to - no 
administrators or moderators of the chat-rooms there;
* The user can be at the same time in as many chats as he wishes;

**Main interface:**

* The main chat interface shouls be presented in two parts: the input area 
and the list of messages;
* The input area should be on the lower side, the list of messagess - on 
the top;
* Messages should be growing from the bottom up, the new message must 
appear below older ones;
* The messages must be sorted by creation (sending time);
* Messages from different users must have the visual contrast of the others;
* If there are many messages in the chat, the user can be able to see them 
all by scrolling them from the bottom up;
* When the user scrolls the messages up, they must be downloaded from server 
in parts, there is no need to download a huge list of messages at once; 

**Additional features:**

* Users should be able to share links, images, videos and other files;
* There should be a set of smiles for the chat as well;
* Users must have status (online, away, offline), as well as avatars;
* Chat-rooms should also have status (alive, pending, saved);
* The room is 'alive' as long as it has at least one online user in it;
* The room is 'pending' during some timeout after it contains no online 
users. But if all users closed this room, it becomes 'saved';
* The user should be able to resume the pending room and view the saved one;
* Each user --who was in the pending room and hasn't closed it yet-- can 
resume the room to continue chat;
* A user can add an other user in 'friend list', the friends must be 
displayed above the others (in user list) and highlighted (in message list);


Tech Specification
------------------


Installation
-------------


