import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Post from './pages/Post/Post';
import PostDetail from './pages/PostDetail/PostDetail';
import Profile from './pages/Profile';
import Register from './pages/Register/Register';

function App() {

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full flex flex-col h-[100vh]'>
        <Header />
        {/* <div className='flex flex-1 overflow-y-auto items-center flex-col '>
          <Post />      
        </div>   */}
        {/* <div className='flex justify-center overflow-y-auto flex-1 py-6 mb-4'>
          <PostDetail />
        </div> */}
        <div className='flex justify-center overflow-y-auto flex-1 py-10'>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
