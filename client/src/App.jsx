import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from './pages/homepage/home.jsx'
import LoginPage from './pages/loginPage/login.jsx'
import ProfilePage from './pages/profilePage/profile.jsx'
import NavBar from './pages/navBar/NavBar.jsx' 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile/:userId ' element={<ProfilePage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
