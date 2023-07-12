import React from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login/Login';
import { UserStorage } from './context/user/UserContext';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import { Profile } from './pages/Profile/Profile';
import { Post } from './pages/Post/Post';
import { UserProfile } from './pages/Profile/UserProfile';
import { NotFound } from './components/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route
              path='profile/*'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path='post/:id' element={<Post />} />
            <Route path='profile/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};
