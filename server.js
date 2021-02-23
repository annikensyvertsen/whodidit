const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port  =  4001;

server.listen(port, () => console.log('server running on port', port))
app.get('/', (req, res) => res.send('Welcome to Express'));
let apiRoutes = require("./routes.js")
//Use API routes in the App
app.use('/api', apiRoutes)

