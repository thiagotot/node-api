const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());



const connectionString = `mongodb+srv://thiagotot:123@cluster0.oaif9.mongodb.net/nodeapi?retryWrites=true&w=majority`

try {
    mongoose.connect(connectionString, { useNewUrlParser: true}, () =>
        console.log("connected"));
} catch (error) {
    console.log("could not connect");
}

requireDir('./src/models');

app.use('/api', require("./src/routes"));


app.listen(9999);