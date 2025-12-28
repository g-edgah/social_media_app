import User from "../models/User.js"

export const getUser = async (req, res) => {
    try {
        const { id } = req.params 

        const user = await User.findById(id);
        const { _id, firstName, lastName, friends, occupation, location, picturePath, token, viewedProfile, impressions } = user;
        const formattedUser = { _id, firstName, lastName, friends, occupation, location, picturePath, token, viewedProfile, impressions }
        
        res.status(200).json(formattedUser);

    } catch(error) {
        res.status(404).json({error: error.message});
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params 

        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        //modifying returned data to a more frontend friendly format before sending it to the frontend (an object)
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        
        res.status(200).json(formattedFriends);

    } catch(error) {
        res.status(404).json({error: error.message});
    }

}

export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;

        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else if (!user.friends.includes(friendId)) {
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        //save changes
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        ); 

        res.status(200).json(formattedFriends);


    } catch (error) {
        res.status(404).json({error});
    }

}