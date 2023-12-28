const express = require('express');
const{connectToMongoDB}= require('./connect')
const urlRoute= require('./routes/url');
const app = express();
const PORT = 3000;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=> console.log("MongoDB connected"))

app.use("/url", urlRoute);















app.listen(PORT,
    () => console.log(` port is listening on ${PORT}`));