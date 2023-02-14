import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect} from 'react';
//components
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Colleagues from './components/Colleagues';
import LearnSection from './components/LearnSection';
import AwardsContainer from './components/AwardsContainer';
//aos
import AOS from 'aos';

//AOS returne ustune elave edilir App.js faylinda 
function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div className='konteyner'>
    <Introduction/>
    <Colleagues/>
    </div>
    <LearnSection/>
    <AwardsContainer/>
    </>
  );
}

export default App;
