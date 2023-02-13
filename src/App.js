import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//components
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Colleagues from './components/Colleagues';
import LearnSection from './components/LearnSection';

function App() {
  return (
    <>
    
    <Navbar/>
    <div className='konteyner'>
    <Introduction/>
    <Colleagues/>
    </div>
    <LearnSection/>
    </>
  );
}

export default App;
