const mongoose = require('mongoose')

const taskScm = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "why no name?"],
        unique : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('tasks', taskScm)