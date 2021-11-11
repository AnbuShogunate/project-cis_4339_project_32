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
            },
            signupDate: {
                type: Date,
                default: Date.now,
                required: true
            },
            firstName:{
                type: String,
                required: true
            },
            lastName:{
                type: String,
                required: true
            },
            dob: {
                type: Date,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            specify: {
                type: String,
                required: true
            },
            wantTheVaccine: {
                type: String,
                required: true
            },
            vaccinePreference: {
                type: String,
                required: true
            },
            vaccinationStatus: {
                type: String,
                required: true
            },
            needAdditionalSupportServices: {
                type: String,
                required: true
            },
            numberChildInHH: {
                type: Number,
                required: true
            },
            anyoneInHHover65:{
                type: String,
                required: true
            },
            veteran: {
                type: String,
                required: true
            },
            race: {
                type: String,
                required: true
            }
        },
        {
            collection:'forms'
        }
);

module.exports = mongoose.model('form', formSchema)