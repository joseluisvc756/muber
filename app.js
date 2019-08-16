const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
mongoose.connect('mongodb://170.150.162.131:6545/muber');
}

app.use(bodyParser.json());
// enviar el objeto app a la funcion routes
routes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });

});

module.exports = app;
