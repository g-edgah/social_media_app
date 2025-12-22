import { useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';


import HomePage from './pages/home.jsx';
import LoginPage from './pages/login.jsx';
import ProfilePage from './pages/profile.jsx';
import NavBar from './components/NavBar.jsx';
import { themeSettings } from './theme.js';
 
import './App.css'

function App() {
  const mode  = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
      

      
    </>
  )
}

export default App
