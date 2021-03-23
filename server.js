const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/client/build')));


// Create DB connection
const uri = process.env.DB_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection opened succesfully');
})

const linksRouter = require('./router/links')

app.use('/', linksRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});