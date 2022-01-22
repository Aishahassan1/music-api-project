# Project Title

ISDB Music database API

## Table of contents

1. Project description
1. List of technologies used
1. User stories
1. Planning and development process
1. Description of functions
1. Unsolved problems/issues

## Project description

<p>I have built a music API called ISDB that allows people to register, login and access my music database. People can also be able to add tracks to the API. Once a user registers, with each login, they will be given an authorisation token of which they must use in order to be able to gain access to the database.<p>

## List of technologies used

- Mongodb
- Mongoose
- Express
- Passport
- Passport Jwt
- JwtWebtoken
- Passport local mongoose
- Swagger editor
- Heroku
- Mongodb Atlas
- Postman
- eslint

## User stories

- Album: as a registered user I would like to be able to have access to an album by its ID
- Artist: as a registered user I would like to be able to have access to an artist by its ID
- Genre: as a registered user I would like to be able to have access to all available genres
- Track: as a registered user I would like to be able to have access to all available tracks
- Track: as a registered user I would like to be able to add tracks to the database
- As a user, I would like to be able to register to use the api with an authorization token
- As a user, I would like to be able to login to use the api with my authorization token

## Planning and development process

- I started by writing my user stories so that it is clear as to what the end goal was for the project in terms of functionality
- I then proceeded to install all the dependencies which can be found in the package.json files, they inlcude:
  jsonwebtoken
  mongoose
  passport
  passport-jwt
  passport-local-mongoose
  javascript
- I upload the csv files to the mongodb database and created all my files and folders and added the code
- I made sure to connect the project to mongodb atlas
- I then created a github repository and pushed my code from visual studio code up to it and then connected heroku to the repository and set it up to deploy upon any changes being made

## Description of functions

- A main feature used in building this app is the use of authorization. This ensures that only people that have been given access to the database are allowed to gain access.
- Post and get methods have been used in this app. Th post allows people to send data to the serves. So for example, track uses a POST method because people are able to add new tracks to the database for example. For all other routes GET was the method used. This method allows us to fetch data from the already existing database.
- The following status codes were used. These gave us feed back when a request was made to the server: 404 (not found), 401 (client request not completed), 201(request suceeded and has resulted in the creation of a resource) and 200 (request has succeeded.).
- eslint was installed to help with ensuring the code format was all correct. It was a really helpful tool that picked up errors. I think this is a new favourite feature for me as it is alwyas useful to know that your code is formatted well.

## Unsolved problems/issues

- A major problem I came across was that something seemed to have happened whereby it looked like all the content of the csv files had some how been removed and only one entry seemed to have been in each file. This then meant no matter what I was searching, it would only bring the same result all the time. So I had to re-import the files so the issue was luckily resolved.
