# _Hack Anon_

#### By _**Dominic Brown**_

#### Independent project @ Epicodus - 6/16/17

## Description

Hack Anon is an online community hub for hackers all backgrounds, whether white-hat black-hat or grey-hat.  This site serves as an anonymous meeting ground to share stories, ideas, and projects relating to technology exploits.  Users are forbidden from using their real-world name in favor of a hacker handle.

## User stories

* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, * which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

## Specifications

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|the app shows a roster of headers for all members of the club|user navigates to the homepage|the members of the club are shown in a list|
|the app has a profile page for every member|user clicks on a member's header|the browser shows the member's profile page|
|the app has a nav bar at the top of all pages|user navigates to subpages of the site|the nav bar shows the same links continuously|
|the app has an 'about' page linked in the nav bar |user clicks the 'about' link|the about page is shown, including details about the hacker group|
|the app has a link in the nav bar for Admins|a user clicks the admin link in the top nav bar|the admin page is shown|
|the admin page shows the full roster of members|admin navigates to the admin page|the full roster of members is shown|
|the roster on the admin page contains details|admin clicks a member's header from the roster|the member's details are shown in full|
|the app allows admins to create new users|admin clicks the "new member" button|a form is shown to take user input, with a button at the bottom to save|
|the app allows admins to edit member's details|admin clicks the "edit" next to a member's details|a form is shown to take user input, with a button at the bottom to save the new changes|
|the app allows admins to delete members from the club|admin clicks a "delete" button next to a member's header|all the member's information is deleted from the app including the profile page|
|the app allows the sorting or filtering of members|user selects and option from a dropdown|the member roster displayed on the home page is filtered, showing the correct sub-set of members|
|the app's data is stored exclusively in a database using Firebase|admin creates, updates, or deletes a user|the data in Firebase is permanently changed|

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* (for sass) Ruby and the sass gem `$ gem install sass`

## Installation

* (using OSX terminal, or Gitbash on Windows)
* $`git clone`
* $`cd hack-anon`
* $`npm install`
* $`bower install

### Build & Run

* a browser window should open showing the app, otherwise...
* Point your browser to [http://localhost:4200](http://localhost:4200).

## Known Bugs
_N/A_

## Technologies Used
 * Angular2
 * Firebase
 * Typescript
 * JavaScript
 * ES6
 * Node
 * Bower
 * CSS
 * Bootstrap
 * HTML

 ### License
 *This software is licensed under the MIT license*
 Copyright © 2017 **Dominic Brown**
