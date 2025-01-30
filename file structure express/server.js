require("dotenv").config();
const express = require('express');
const first = require('./routes/first');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;



const app = express();
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
app.use('/',first);

app.listen(PORT);
