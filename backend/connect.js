const mongoose = require('mongoose');

let connectToDB = async (url) => {
    return mongoose.connect(url)
}

module.exports = connectToDB;