const { triggerAsyncId } = require('async_hooks');
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    id : {},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status:{
     type: Boolean,
    },
    verified:{
        type: Boolean,
        mailhook: ""
    },
    text: {
        type: String,
        required: [true, 'Please add a Text']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goals', goalSchema)