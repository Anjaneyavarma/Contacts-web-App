// import 
const express = require('express');
const socket = require('socket.io')
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const Contact = require('./model');

const app = express();

const server = http.createServer(app);

PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/contacts',router); 



mongoose.connect('',
    { useNewUrlParser: true },
    ()=>console.log('MongoDb connected')
)


server.listen(PORT, ()=> console.log(`server is running in ${PORT}`))
