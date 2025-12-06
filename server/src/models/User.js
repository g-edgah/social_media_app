import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 30,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 30,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 128,
    },
    picturePath: {
        type: String,
        default: '',
    },
    email: {
        type: Array,
        default: [],
    },
    location: {
        type: String,
        max: 128,
    },
    occupation: {
        type: String,
        max: 128,
    },
    viewedProfile: {
        type: Number
    },
    impressions: {
        type: Number
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User