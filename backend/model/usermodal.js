const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id : {},
    status:{
     type: Boolean,
    },
    verified:{
        type: Boolean,
        mailhook: ""
    },
    name: {
        type: String,
        required: [true, 'Please add your Name']
    },
    email: {
        type: String,
        required: [true, 'Please add your Name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add your Name']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)