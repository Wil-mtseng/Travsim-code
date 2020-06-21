# Travsim-code
This is a basic express app that serves two endpoints, namely /getAvailable and /setLimit

### Getting started:
cd into folder 
* npm install

#### Accessing the server:
To start server
* node app.js  

visit https://localhost:3000/getAvailable to retrive the availabe stock. It will return a JSON object of the stock available

To set a limit POST  /setLimit/id  with the parameters in the request body   

#### Database:
A mock database of goods has been created using JSON file, it is located in the db folder

#### Factors influencing the technical:
Due to the lack of necessity of a databse all updates are wrriten to a JSON file. 
Express framework was choosen because it is a fast, unopinionated, minimalist framework.
The project structure is set up to meet the requirements of exposing just the two endpoints.

#### If allocated more time:
I would add tests for the source code and refactor the code for better performance  
