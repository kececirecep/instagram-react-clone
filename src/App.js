import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';

function App() {

  return (
    <div className='flex'>
      <Aside />
      <div className='w-full'>
        <Header />
      </div>
    </div>
  );
}

export default App;
