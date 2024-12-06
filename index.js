require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { todoRouter } = require('./routes/todo.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter);

// Test endpoint
app.get('/test', (req, res) => {
  res.send('Hello from backend');
});

const port = process.env.PORT;


app.listen(port);
