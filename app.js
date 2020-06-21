'use strict';

// Express framework
const express = require('express');

// Built in file system helper to serve json file
const fs = require('fs');

// Instance of express to serve endpoints
const app = express();

// Port for endpoints
const port = process.env.PORT || 3000;

// Parse incoming data as json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Handling routes
const routes = require('./routes/routes.js')(app, fs);

//Error handling for requests
app.use((req, res)=>{
	res.status(404).send('Page not found')
});

app.listen(port, () =>
	console.log(`App listening on port ${port}`)
);
