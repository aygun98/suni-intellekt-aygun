import React from 'react'
import '../assets/css/LearnSection.css'
import LearnImg from '../assets/images/learnimg.svg'
import Button from './Button'
//typed yazi yazma elave edildi
import Typed from 'react-typed';

const LearnSection = () => {
    return (
        <div className='learnSection row'>
            <div className='learn-left-side col-12 col-md-6 ' data-aos="fade-up-right" data-aos-duration="2000"><img className='w-100 h-100' src={LearnImg} alt="" /></div>
            <div className='learn-rigth-side col-12 col-md-6' data-aos="fade-up-left" data-aos-duration="2000">
                <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
                <Typed className='learnType'
                    strings={['Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.']}
                    typeSpeed={40}
                />
                
                <Button  icindekiYazi="Learn More" klassAdi='my-custom-btn'/>
                
            </div>
        </div>
    )
}

export default LearnSection