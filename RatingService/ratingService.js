const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const Rating = require('./models/Rating');


const app = express();
const server = http.createServer(app);

const dbURL = 'mongodb://mongodb:27017/mydb'; //'mongodb+srv://admin:12345@yasindatabase.mbbh4.mongodb.net/DSLab?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected to the database...."))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', require('./routes/api/rating'));

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));