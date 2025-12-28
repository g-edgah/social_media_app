# Socio - Social Media Application

![React](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![Express](https://img.shields.io/badge/Express-4.18-lightgrey) ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9-red) ![Vite](https://img.shields.io/badge/Vite-4.4-%23646CFF?style=flat&logo=vite&logoColor=white)

## 📖 Overview

Socio is a fully functional social media application that allows users to register accounts, create and share posts, and manage friend connections. Built with modern web technologies, it provides a complete social networking experience with authentication, user profiles, content sharing, and social interactions.

## ✨ Features

### 👤 **Authentication & User Management**
- **User Registration**: Create new accounts with email and password
- **Secure Login**: JWT-based authentication for protected routes
- **Profile Management**: Personal information display and updates

### 🏠 **Homepage Dashboard**
- **User Info Panel**: Display account information and statistics
- **Post Creation**: Share thoughts, images, and updates with the community
- **News Feed**: View posts from all users in a chronological feed
- **Social Interactions**: Like posts and manage friend connections
- **Sponsored Content**: Discover relevant advertisements and promotions
- **Friends List**: View and manage your social connections
- **Theme Toggle**: Switch between light and dark modes

### 👥 **Social Features**
- **Friend System**: Add/remove friends with simple click interactions
- **Profile Navigation**: Click on usernames to visit other users' profiles
- **User Profiles**: View detailed profiles and user-specific posts
- **Content Discovery**: Explore posts from across the platform

### 🎨 **User Experience**
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Layout**: Intuitive navigation bar with essential functions
- **Real-time Updates**: Dynamic content loading and state management

## 🏗️ **Tech Stack**

### **Frontend**
- **React 18** - UI library for building interactive interfaces
- **Vite** - Next-generation frontend tooling for fast development
- **Redux Toolkit** - State management for complex application state
- **React Router** - Client-side routing and navigation

### **Backend**
- **Node.js** - JavaScript runtime for server-side execution
- **Express.js** - Web application framework for building RESTful APIs
- **MongoDB** - NoSQL database for storing user data and posts
- **Mongoose** - ODM for MongoDB and Node.js
- **JSON Web Tokens** - Secure user authentication and authorization
- **Multer** - Middleware for handling file uploads
- **Bcrypt** - Password hashing for security

## 📁 **Project Structure**

```
socio-social-app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components (Home, Profile, Login)
│   │   ├── redux/        # Redux store and slices
│   │   ├── utils/        # Utility functions and API calls
│   │   └── assets/       # Images, styles, and static files
│   ├── public/           # Static files
│   └── package.json      # Frontend dependencies
│   └── .env              # Frontend secrets
│
├── server/               # Backend Node.js application
│   ├── controllers/      # Business logic for routes
│   ├── models/          # Database schemas (User, Post)
│   ├── routes/          # API endpoint definitions
│   ├── middleware/      # Authentication and file handling
│   ├── utils/           # Helper functions
│   └── package.json     # Backend dependencies
│   └── .env             # Backend secrets
│
└── README.md            # Project documentation
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 
- npm or yarn package manager
- MongoDB instance (local or cloud)

### **Installation**

1. **Clone the repository**
   ```
   git clone https://github.com/g-edgah/social_media_app.git
   cd social_media_app
   ```

2. **Backend Setup**
   ```
   cd server
   npm install
   ```
   Create a `.env` file in the server directory:
   server:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string 
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```
   cd ../client
   npm install
   ```
   Create a `.env` file in the client directory:
   ```
   VITE_API_URL=http://localhost:5001
   ```

### **Running the Application**

1. **Start the backend server**
   ```
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

3. **Open your browser and visit to `http://localhost:5173`**

## 🔧 **API Endpoints**

### **Authentication**
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login existing user
- #logout is handled by reseting state

### **Users**
- `GET /users/:id` - Get specific user
- `GET /users/:id/friends` - Get user's friends
- `PATCH /users/:id/:friendId` - Add/remove friend

### **Posts**
- `GET /posts` - Get all posts
- `POST /posts` - Create new post
- `PATCH /posts/:id/like` - Like/unlike post

## 🎯 **Key Components**

### **Frontend Pages**
- **Login/Register Page**: User authentication interface
- **Homepage**: Main dashboard with posts, user info, and friends list
- **Profile Page**: User-specific profile view with their posts
- **Navigation Bar**: Global navigation with theme toggle and logout

### **Backend Architecture**
- **Authentication API**: JWT-based secure authentication
- **User Management**: CRUD operations for user data
- **Post Management**: Create, read, update, delete posts
- **File Handling**: Image upload and management
- **Friend System**: Manage user connections and relationships

## 🛡️ **Security Features**
- **JWT Authentication**: Secure API endpoints with token-based auth
- **Password Hashing**: Bcrypt implementation for password security
- **Protected Routes**: Client and server-side route protection using middleware
- **Input Validation**: Sanitization and validation of user inputs

## 📱 **State Management**

### **Redux Store Structure**
```javascript
{
  auth: {
    mode: 'light' | 'dark',
    user: null | UserObject,
    token: null | string,
    posts: Post[]
  }
}
```

### **Key Redux Actions**
- `setMode`: Toggle between light/dark themes
- `setLogin`: Update user authentication state
- `setLogout`: Clear user authentication
- `setFriends`: Update user's friends list
- `setPosts`: Update posts array
- `setPost`: Update individual post

## 🔄 **Development Features**
- **Hot Reloading**: Instant feedback during development
- **Environment Variables**: Secure configuration management
- **Error Handling**: Comprehensive error handling on both client and server

## 🎨 **UI/UX Features**
- **Responsive Design**: Works on desktop and mobile devices
- **Theme Consistency**: Cohesive design across all components
- **Loading States**: Visual feedback during data fetching
- **Form Validation**: User-friendly form error messages
- **Interactive Elements**: Hover effects and transitions

## 📈 **Future Enhancements**
- [ ] Real-time messaging and notifications
- [ ] Email notifications and newsletters
- [ ] Video upload and playback
- [ ] Stories feature (24-hour content)
- [ ] Groups and communities

---

**Note**: This is a portfolio project demonstrating full-stack development skills with React, Node.js, Express, MongoDB, and modern web technologies. The application showcases authentication, state management, API integration, and responsive UI design in a real-world social media context.

---
