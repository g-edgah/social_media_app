import { ChatBubbleOutlineOutlined,  FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material"; 

import Friend from "../Friend.jsx";
import FlexBetween from "../styled/flexBetween.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPosts } from "../../state/state.js";
import PostWidget from "./PostWidget.jsx";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id)

  const api_url = import.meta.env.VITE_API_URL;             