import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
//router marsut sistemi elave edildi
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

//aos
import AOS from 'aos';

//AOS returne ustune elave edilir App.js faylinda 
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/haqqimizda' element={<About/>}/>
          <Route path='/xidmetler' element={<Services/>}/>
          <Route path='/bloq' element={<Blog/>}/>
          <Route path='/elaqe' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
