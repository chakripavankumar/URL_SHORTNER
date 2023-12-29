const express = require('express');
const{conectToMongoDB}= require('./connect')
const urlRoute= require('./routes/url');
const app = express();
const PORT = 3000;



conectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected"));


app.use(express.json());
app.use("/url", urlRoute);








app.listen(PORT,
    () => console.log(` port is listening on ${PORT}`));