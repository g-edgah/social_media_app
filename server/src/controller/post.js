import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async() => {
    try {
        const {
            userId, 
            description, 
            picturePath
        } = req.body;

        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstNmae: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePat: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })
        await newPost.save();

        //return updated posts(all posts including the new one)
        const post = await Post.find();

        res.status(201).json({post});

    } catch (error) {
        res.status(409).json({error: error.message})
    };
};

export const getFeedPosts = async(req, res) => {
    try {
        const post = await Post.find();

        res.status(201).json({post});

    }catch (error) {
        res.status(404).json({error: error.message})
    };
};

export const getUserPosts = async(req, res) => {
    try {
        const { userId } = req.params;

        const posts = await Post.find({ userId });\
        res.status(200).json({posts})

    }catch (error) {
        res.status(404).json({error: error.message})
    };
};

export const likePost = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;

        const post = await post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            await post.likes.delete(userId);
        } else if (!isLiked) {
            await post.likes.set(userId, true)   
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id, { likes: post.likes }, { new: true } //generate new object
        );

        res.status(200).json({updatedPost})
        

    }catch (error) {
        res.status(500).json({error: error.message})
    };
};