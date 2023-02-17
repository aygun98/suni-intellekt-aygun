import React from 'react'
//pages companents
import Introduction from '../components/Introduction';
import Colleagues from '../components/Colleagues';
import LearnSection from '../components/LearnSection';
import AwardsContainer from '../components/AwardsContainer';

const Home = () => {
  return (
    <div>
        <div className='konteyner'>
    <Introduction/>
    <Colleagues/>
    </div>
    <LearnSection/>
    <AwardsContainer/>
    </div>
  )
}

export default Home