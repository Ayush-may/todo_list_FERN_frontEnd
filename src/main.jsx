import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx'
import SignUp from './components/SignUp.jsx'
import SignUPImage from './components/SignUPImage.jsx';
import Profile from './components/profileComponents/Profile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='sign_up'  >
        <Route path='' element={<SignUp />} />
        <Route path='add_image' element={<SignUPImage />} />
      </Route>
      <Route path='profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
)
