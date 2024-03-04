import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx'
import SignUp from './components/SignUp.jsx'
import SignUPImage from './components/SignUPImage.jsx';
import Profile from './components/profileComponents/Profile.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { store, persistor } from './app/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} >
      <BrowserRouter >
        <ToastContainer theme="colored" closeOnClick={true} pauseOnFocusLoss={false} position='bottom-center' />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='sign_up'  >
            <Route path='' element={<SignUp />} />
            <Route path='add_image' element={<SignUPImage />} />
          </Route>
          <Route path='profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
