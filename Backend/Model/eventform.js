const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new mongoose.Schema(
    {
        _id: {type:String, default:uuid.v1},
        eventType: {
            type: String,
            required: true
        },    
        locationName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
        }
    },
        {
            collection:'eventforms'
        }
        );

        module.exports = mongoose.model('eventform', formSchema)