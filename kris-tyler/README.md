# Kilovolt Blog Dynamic Updating
**Authors**: Tyler Fishbone, Kris Sakarias
**Version**: 1.4.0
## Overview
Welcome to our Kilovolt Blog. On it you will find a dynamically rendered list of blog entries all containing differen themed lorem ispum texts.
There is also a new.html page which allows blog manager to write aricles them self and export a formatted JSON for dynamically.
## Getting Started
All files needed for opening and running this site are included in this Github Repo. Simply fork or download repo and open in the index.html file after files are fully downloaded. 
## Architecture
This site makes use of HTML and CSS, as well as the @ media feature which gives the page responsive functionality upon screen resizing.
Though a navigation bar is included the links are not yet live.
This blog has a blogArticle.js file that contains all the raw articles to be rendered, and an article.js that renders the articles there.
## Change Log
02-19-2018 12:00PM - page now makes use of local storage and an ajax request to load content.
02-18-2018 20:00PM - Added new.html page for blog format generation
02-16-2018 10:47PM - refactored template to use handlebars.js library. refactored functions to arrow functions where possible.
02-15-2018 12:30PM - added added articleView.js, filter by article view and category. Tab functionality. hid some of article and show it on click.
02-14-2018 12:30PM - debugged prototype method to display articles through loop and refactored the loop to use forEach instead of for.
02-14-2018 11:00PM - Worked on constructor function and scaffolded out the css documents.
02-13-2018 13:30PM - Page responded to resizing and has a hover state over the hamburger menu. Also did image sizing in tablet vs desktop versions.
02-13-2018 11:30AM - CSS now shows page will desired styling, but no interactive or RWD features.
02-13-2018 10:30AM - Starter files have been imported and meta tags and CSS pages scaffolded.
## Credits and Collaborations
To build this project we made up of articles listed on MDN:
Responsive: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width
Handlebars tempalte builder: http://handlebarsjs.com/