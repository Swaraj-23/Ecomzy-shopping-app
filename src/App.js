import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
