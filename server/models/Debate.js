const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const User = require('./User');


const debateSchema = new Schema({
    debateTitle: {
        type: String,
        required: true,
        trim: true
    },
    SpeakerOne: {
        type: String,
        required: true,
        trim: true
    },

    SpeakerTwo: {
        type: String,
        required: true,
        trim: true
    },

    
    debateDate: {
        type: Date,
        default: Date.now
    },
}
);

    const debate = mongoose.model('Debate', debateSchema);

    module.exports = debateSchema;