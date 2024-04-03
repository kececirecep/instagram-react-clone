import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full flex flex-col'>
        <Header />
        <div className='flex justify-center items-center h-full'>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
