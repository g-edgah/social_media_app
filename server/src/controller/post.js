import Post from '../models/Post.js';

export const createPost = async() => {
    try {

    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getFeedPosts = async(req, res) => {

};

export const getUserPosts = async(req, res) => {

};

export const likePost = async(req, res) => {

};