
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App ">
     <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>} />

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
