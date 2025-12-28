import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import FriendListWidget from "../components/widgets/FriendListWidget.jsx";
import MyPostWidget from "../components/widgets/MyPostWidget.jsx";
import PostsWidget from "../components/widgets/PostsWidget.jsx";
import UserWidget from "../components/widgets/UserWidget.jsx";  


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const api_url = import.meta.env.VITE_API_URL;

    const getUser = async () => {
        const response = await fetch(`${api_url}/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data);
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    if (!user) {
        return null;
    }

    return (
        <Box>
            <NavBar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="2rem"
                justifyContent="center"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={userId} picturePath={user.picturePath} />
                    <Box m="2rem 0" />
                    <FriendListWidget userId={userId} />    
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    {/* <MyPostWidget picturePath={user.picturePath} /> */}
                    <Box m="2rem 0" />
                    <PostsWidget userId={userId} isProfile/>
                </Box>
            </Box>
        </Box>  
    );
}

export default ProfilePage;