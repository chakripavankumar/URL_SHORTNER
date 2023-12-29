const express = require('express');
const{conectToMongoDB}= require('./connect')
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const app = express();
const PORT = 3000;



conectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected"));

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        }
    });
     res.redirect(entry.redirectURL);
    })

app.use(express.json());
app.use("/url", urlRoute);








app.listen(PORT,
    () => console.log(` port is listening on ${PORT}`));