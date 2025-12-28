import { Box, Typography, useTheme } from '@mui/material';
import WidgetWrapper from '../home/WidgetWrapper.jsx';
import Friend from '../Friend.jsx';
import FlexBetween from '../styled/flexBetween.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFriends } from '../../state/state.js';

const FriendListWidget = ({ userId }) => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const friends = useSelector((state) => state.user.friends);
    const token = useSelector((state) => state.token);

    const api_url = import.meta.env.VITE_API_URL;

    const getFriends = async () => {
        const response = await fetch(`${api_url}/users/${userId}/friends`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    useEffect(() => {
        getFriends();
    }, []); 

    return (
        <WidgetWrapper>
            <Typography color={palette.neutral.dark} variant="h5" fontWeight="500" sx={{ mb: '1.5rem' }}>
                Friend List
            </Typography>  
            <Box flexDirection="column" gap="1.5rem">
                {friends.map((friend) => (
                    <Friend
                        key={friend._id}
                        friendId={friend._id}
                        name={`${friend.firstName} ${friend.lastName}`}
                        subtitle={friend.occupation}
                        userPicturePath={friend.picturePath}
                    />
                ))}
            </Box>
        </WidgetWrapper>    
    );
};

export default FriendListWidget;