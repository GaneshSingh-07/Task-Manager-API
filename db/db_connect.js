const mongoose = require('mongoose')

const db_connect = (url) => {
    return mongoose.connect(url)
}

module.exports = db_connect