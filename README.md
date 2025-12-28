# soshio the social media app

## a simple social media app that allows users to register accounts, create and share posts, and make friends or drop them

the application is a fully fuctional social media application named 'socio' (not very creative, I know) with a frontent (client) built with react and vite and a backend build with node and express.

## frontend
the frontend features a:
 *login/register page that allows new users to create accounts and regular users to log into their accounts using an email and a password. 
 *homepage that features sections for:
    -info about the user's account, 
    -a section that allows the user to create and share new posts
    -section that displays posts from all users allowing the user to like the posts or add and/or remove the user who shared the post. On clicking the username of another user from the post, a user can visit the profile pages of other users and see posts shared by a specific user
    -a section that shows sponsored contend and
    -a a section that shows the current user's friends
  *profile page of other user which the user is navigated to after clicking on another user's username from the home page or friends list.
  it features:
      -a section showing the users information
      -a section showing user specific posts

the navigation bar allows the user to perform basic functions like log out of their account and switch between light and dark mode

## backend
the backend is mainly build with node and express. it includes APIs for:
  authentication using jsonwebtokens
  fetching and updating user information via CRUD operations
  file handling
  fetching and updating posts via CRUD operations

##teckstack used
