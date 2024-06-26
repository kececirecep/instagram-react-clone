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

import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.auth.currentUser)

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full flex flex-col h-[100vh]'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/post-share' element={currentUser ? <PostShare /> : <Login />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/followers/:username' element={<UserFollowers />} />
          <Route path='/update/:username' element={<ProfileUpdate />} />
          <Route path='/detail/:postId' element={<PostDetails />} />
          <Route path='/login' element={currentUser ? <Home /> : <Login />} />
          <Route path='/register' element={currentUser ? <Home /> : <Register />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
