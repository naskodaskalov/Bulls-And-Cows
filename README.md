## Bulls and Cows - The GAME

This is a project created for an interview for ***. The idea behind everything is to create the popular game called "Bulls and Cows".

[DEMO](http://bullsandcows.developine.eu/)

### Functionalities

* Anonymous users can see only the Ranging page, which represents a chart of TOP25 players.
* Users can register and login.
* When the user start a new game, he has to guess the 4 digits number, which is randomly chosen by the script.

### Technologies
* Front-end: React.
* Back-end: Node + Express and Firebase for DB service.

### Back-end endpoints
* **"/auth/signup"** - Create new account by sending username, email and password.
* **"/auth/login"** - Login by sending email and password. As a result you will get an authorization token.
* **"/auth/updatepoints"** - When the user finish a game, by sending email and points, the user will be updated in the DB.
* **"/game/getallusers"** - Get an array of all players with their current points.
