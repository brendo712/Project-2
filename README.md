# Project-2


## Problem:

I have a passion for European football but would like a place to engage with others that share my passion.  


##General App Idea/Purpose:

An app that allows fans of football to engage about the sport that they love.


##Users:

Fans of European football


## Ideas:

At first my idea is to frame it more like a message board. I will scope it to a single league to start. The premier league in England. Users will be able to create a profile including things like favorite team, player, location, and maybe a brief about section. Users will then be able to post on the general message board thread to communicate with other fans that may share allegiance or be their enemy.


##MVP:

My MVP will be met when I have created the Banter full stack application using Node.js, Mongoose, Express, and EJS. The MVC I will use will be listed below. Clubs will have 7 restful routes and full CRUD. Users will be able to post messages.


### Models:

* clubs.js => club schema
* messages.js => message schema
* seed.js => PL clubs
* Users.js => user schema

### Views:

* clubs => will contain pages for edit, index (PL table), new, and show
* partials => footer, header, and nav
* sessions => page for logging in to a user profile
* users => page for creating a user profile
* home.ejs => Home page and message board

### Controllers:

* clubsController => routes for clubs
* messagesController => routes for messages
* sessionsController => routes for sessions
* usersController => routes for users


### Stretch Goals:

* I will try to use bootstrap to style my app.
* I would like to add the teams crest as an Icon to a user when they select their favorite club.
* I would like to add some sort of "like" feature to the message board.
* API the PL data (fixtures, table, teams, etc)
* Google map feature where fans may be able to mark a spot to watch games together.
* Allow the fans to post images and/or gifs.

### Approach:

I will use the lectures and docs to research and deploy my app. This time around I would like to have some time to work on styling and stretch goals.

### Unsolved Problems:

* I am still not happy with the styling of the message board.
* I found it difficult to have the username pull from the database when a user posts a message.
* I wanted to have the dropdown list of club names be populated by the database as well instead of hard coded. I couldn't get to the relating two models lectures.
* I also wanted to be able to click on the username from the front and take me to the user show page.

### Notes for myself:

Address the glaring style issues such as the tables and the general padding/margins of items. Use the functionality once I learn to relate two models.
