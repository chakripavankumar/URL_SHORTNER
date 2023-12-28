const mongoose = require('mongoose');

const Urlschema = new mongoose.Schema({
    shortId: {
        type: 'string',
        required: true,
        unique: true   
    },
    redirectURL: {
        type: 'string',
        required: true,
    },
    visitHistory: [{ timestamp: {type: Number} }],
},
    { timestamps: true }
)

const URL = mongoose.model("url", Urlschema);
 module.exports = URL;