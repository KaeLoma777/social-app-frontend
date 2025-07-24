import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/Home';
import RegisterPage from './assets/pages/Register';
import SignInPage from './assets/pages/SignIn';
import FeedPage from './assets/pages/FeedPage';
import NavBar from './assets/components/Navbar';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/feed' element={<FeedPage />} />
      </Routes>
    </>
  )
}


export default App
