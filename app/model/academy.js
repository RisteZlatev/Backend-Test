const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adress: String,
});

const Academy = mongoose.model('Academy', academySchema);
module.exports = Academy;