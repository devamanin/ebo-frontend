// importing express library
const express = require('express');

const userRouter = require('./Routers/userRouter')

// creates an express application
const app = express();

app.use(express.json());

app.use('/api/user',userRouter)

module.exports = app;

