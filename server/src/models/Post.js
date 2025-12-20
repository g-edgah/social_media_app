import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        reqquired: true
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
    },
    //map is more efficient than array as the app scales. maps are type objects with different features that make them perfect for this use case
    likes: {
        type: Map,
        of: Boolean,
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

const Post = mongoose.model('Post', postSchema);

export default Post;