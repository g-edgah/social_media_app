import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/state.js";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const api_url = import.meta.env.VITE_API_URL;

  const getPosts = async () => {    
    const response = await fetch(`${api_url}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    //console.log(data.post);
    dispatch(setPosts({ posts: data.post }));
  };

  const getUserPosts = async () => {
    const response = await fetch(`${api_url}/posts/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    //console.log(data);
    dispatch(setPosts({ posts: data.posts }) );
  };  
  
  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    };
  }, []); 

 
  // if (!Array.isArray(posts)) {
  //   console.log("posts is not an array")
  //   console.log(posts);
  // return <div>Loading posts...</div>; // or null, or a loading spinner
  // } 

  return (
    <>
      {posts.map(               
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget                   
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}     
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;