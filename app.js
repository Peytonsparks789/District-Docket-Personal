const express = require('express');
const app = express();

const { createUser } = require('./js/server/crudFunctions/userCreate');

// Serve the index.html file
app.use(express.static('public'));

const bodyParser = require('body-parser');

// Parse JSON-encoded bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


// Create a route for handling user creation
app.post('/createUser', async (req, res) => {
    const { username, password, firstName, lastName, email, phone } = req.body;
    const result = await createUser(username, password, firstName, lastName, email, phone);
    res.json(result);
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
