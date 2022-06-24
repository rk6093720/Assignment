import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mens from './pages/Men';
import Womens from './pages/Women';
import Kids from './pages/Kid';
import Login from './pages/Login';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Mens' element={<Mens/>}></Route>
        <Route path='/Womens' element={<Womens/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Details' element={<Details />} ></Route>
      </Routes>
    </div>
  );
}

export default App;