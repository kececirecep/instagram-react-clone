import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Post from './pages/Post/Post';
import PostDetail from './pages/PostDetail/PostDetail';
import PostShare from './pages/PostShare/PostShare';
import Profile from './pages/Profile';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import UserFollowers from './pages/UserFollowers/UserFollowers';

function App() {

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full flex flex-col h-[100vh]'>
        <Header />

        {/*<Post /> */}
        {/*<PostDetail />*/}


        {/*<Profile />*/}


        {/* <ProfileUpdate />*/}


        {/*<UserFollowers /> */}

        <Search />


      </div>
    </div>
  );
}

export default App;
