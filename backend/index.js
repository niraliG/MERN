const express = require('express');
const mongoose = require('mongoose');
const router = require('./db/routers/router');
const cors = require('cors');
require('dotenv').config()
const app = express()


const server_port = process.env.SERVER_PORT
const db_port = process.env.DB_PORT
const host_port = process.env.HOST_PORT;

//mongoose ODM connection
mongoose.connect(`mongodb://localhost:${db_port}/test`, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('Connected to MONGODB'));

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

app.use(express.urlencoded({extended : true}))

app.use(express.json())
var corsOptions = {
      origin : "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use('/', router)

app.get('/', (req,res)=> res.send(" server running on"));

app.listen(server_port, ()=>console.log(` running on https://localhost:${server_port}`))

