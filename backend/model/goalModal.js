const { triggerAsyncId } = require('async_hooks');
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    id : {},
    status:{
     type: Boolean,
    },
    verified:{
        type: Boolean,
        mailhook: ""
    },
    email: {
        type: String,
        required: [true, 'Please add a Emailadress']
    },
    firstname:{
        type: String,
        required: [true, 'Please add a Firstname']
    },
    lastname:{
        type: String,
        required: [true, 'Please add a Lastname']
    },
    dayofbirth:{
        type: String,
        required: [true, 'Please add your Day of Birth']
    },
    username:{
        type: String,
        required: [true, 'Please add a Username']
    },
    password:{
        type: String,
        required: [true, 'Please add a Password']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goals', goalSchema)