
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="App ">
     <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Error/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/blog' element={<Blog/>} />
           <Route path='/portfolio' element={<Portfolio/>}/>
           <Route path='/contactus' element={<ContactUs/>}/>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
