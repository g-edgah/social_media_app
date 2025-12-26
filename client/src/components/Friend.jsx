import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state/state.js";
import FlexBetween from "./styled/flexBetween.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.some((friend) => friend._id === friendId);

  const api_url = import.meta.env.VITE_API_URL;

  const patchFriend = async () => {         
    const response = await fetch(`${api_url}/users/${loggedInUserId}/${friendId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <img
            src={`${api_url}/assets/${userPicturePath}`}
            alt="friend"
            style={{ width: "55px", height: "55px", borderRadius: "50%", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Typography
            variant="h5"
            color={palette.neutral.dark}
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={palette.neutral.medium}>{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: palette.primary.light, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: palette.primary.dark }} />
        ) : (
          <PersonAddOutlined sx={{ color: palette.primary.dark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;