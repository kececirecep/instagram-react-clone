import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'; 
import PostShare from './pages/PostShare/PostShare';
import Profile from './pages/Profile/Profile'; 
import Search from './pages/Search/Search'; 
import UserFollowers from './pages/UserFollowers/UserFollowers';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import PostDetails from './pages/PostDetail/PostDetail'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Error from './pages/Error/Error'

import { Routes, Route } from 'react-router-dom';

import { fetchAuthData } from './redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const currentUser = useSelector(state => state.auth.currentUser) 
  const error = useSelector(state => state.auth.error)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAuthData)
  },[dispatch])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full flex flex-col h-[100vh]'>
        <Header />

        {
          currentUser ? console.log("oldu"+currentUser) : console.log("olmadı"+currentUser)
        }
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search/> } />
          <Route path='/post-share' element={<PostShare/> } />
          <Route path='/profile' element={<Profile/> } />
          <Route path='/followers/:username' element={<UserFollowers/> } />
          <Route path='/update/:username' element={<ProfileUpdate/> } />
          <Route path='/detail/:postId' element={<PostDetails/> } />
          <Route path='/login' element={<Login/> } />
          <Route path='/register' element={<Register/> } />
          <Route path='*' element={<Error/> } />
        </Routes>



      </div>
    </div>
  );
}

export default App;
