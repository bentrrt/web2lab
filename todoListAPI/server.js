var express = require('express');
const { mongo } = require('mongoose');
    app = express(); 
    port = process.env.PORT || 3000;
    mongoose = require('mongoose');
    Task = require('./api/models/todoListModels');
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://giabao1007:lgXaqm5rkR4dXsU3@fgwweb2.neswwsr.mongodb.net/?retryWrites=true&w=majority&appName=FGWWEB2');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);