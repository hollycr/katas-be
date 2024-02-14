const express = require('express');
const Model = require('./mvc/model');
const Controller = require('./mvc/controller');
const cors = require('cors');
const { PORT = 9090 } = process.env;

const app = express();
const model = new Model();
const controller = new Controller(model)

app.use(cors());

app.use(express.json());
app.post('/run-test/:challenge_id', controller.runTest);

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

