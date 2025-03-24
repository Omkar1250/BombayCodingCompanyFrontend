
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
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import EcommerceSolutions from './pages/Ecomerce';
import EmailHosting from './pages/EmailHosting';
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
           <Route path='/services/web-development' element={<WebDevelopment/>}/>
           <Route path='/services/mobile-app-development' element={<AppDevelopment/>} />
           <Route path='/services/ecommerce-solutions' element={<EcommerceSolutions/>} />
           <Route path='/services/email-hosting' element={<EmailHosting/>} />



     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
