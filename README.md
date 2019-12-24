# FriendFinder

using nodemon
plus external environmant variable to support deployment to server
other npm packages:
express for routing
body-parser for parsing user inputs for processing
requiring built-in path and fs for global path and file operations 

### (Note: this file is mark-down formatted to be read in a code-editor "preview" function or on github)
## Welcome to the readme file for my FriendFinder app!  

This application is deployed on heroku at:

* https://github.com/rgvegajr/nodejs-mysql

The github repository ca be found at: 

* https://github.com/rgvegajr/FriendFinder

## Background/Purpose:

This web application is intended to demonstrate a functional server based application based on a nodejs server and uses the following addintional npm libraries: express and body-parser.  The functional purpose is to allow a user to complete a personal survey which includes a name, a photo (via url), and answers to 10 questions dealing with personality, likes, dislikes, etc.  The user's answers are compared to a database of other user's surveys answers to find the most compatible (i.e.similar) "match".  The application returns the name and photo of the database user with the least overall difference from the current user.  Other functionality includes links to return to the home page, a link to display the user database, and a link t the github repository for the application.  

## Technologies used:

node.js, with express and body-parser npm packages installed.  I also used the nodemon package to simplify development and testing.

## My role:  

I am the app developer.  I used MS Visual Studio Code as my integrated development environment and Github for repository and version control.  Bootcamp instructors provided guidelines, instructions and requirements for this app.

## App Organization:

The code is organized as follows:
1.  Required modules import
2.  Global variables declared to include port and environment variables suitable for a hosted environment.
3.  Function declarations
4.  Function calls

## Instructions (These instructions assume user is familiar with GITHUB and node js and has installed node.js on a PC/Mac.):

1.  Access the web-application via the url provided above.
2.  From the landing/home page, click the "take the survey" button in the middle to take you to the survey form. 
3.  Complete the survey by entering name, a photo url, and selecting answers (1 through 5) to each of the 10 questions.
4.  Submit the survey by clicking the submit button at the bottom of the page.
5.  the application will compare your answers and display a page with name and phtot of the closest match.
6.  Select the appropriate item from the nav bar to either return to the home page, display the user database (in JSON format), or go to the github repository.