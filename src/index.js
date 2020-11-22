const express = require('express');
const config = require('./config/app');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./router');

app.use(router);

const port = config.appPort || 3000;

app.listen(port, () => {
	console.log(`Server is up and running 🔥 on port ${port}`);
});
