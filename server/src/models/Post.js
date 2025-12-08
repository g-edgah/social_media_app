import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId: {
        type: String
    },
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
    location: {
        type: String,
        max: 128,
    },
    description: {
        type: String,
        min: 1,
    },
    userPicturePath: {
        type: String,
    },
    picturePath: {
        type: String,
        default: '',
    },
    likes: {
        type: Object,
        default: {},
    },
    comments: {
        type: Array,
        default: [],
    },

}, {
    timestamps: true,
    strict: true,
    collection: 'posts'
})