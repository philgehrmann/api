const { triggerAsyncId } = require('async_hooks');
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add text value'],

    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('goal', goalSchema)