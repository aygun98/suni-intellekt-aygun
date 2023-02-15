import React from 'react'
import introductionSekil from '../assets/images/intoduction_sekil.svg'
import '../assets/css/Introduction.css'
import Button from './Button'
//react-typed
import Typed from 'react-typed';
//icon elavesi butona
import PlayIcon from '../assets/images/playicon.svg'


const Introduction = () => {
  return (
    <section className='introduction row '>
        <div className="introduction_left_side col-12 col-md-6 ">
            <h5 className=''>Next genaretion platform</h5>
            <h1 className=''>Artificial intelligence & Syber security</h1>
            <Typed className='small-Type'
                strings={[
                    'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
                   ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
                    
                </Typed>
         <div className='button-group'>
            <Button icindekiYazi='Get Started' klassAdi='my-custom-btn margin-btn' />
            <Button icindekiYazi='Watch Video' klassAdi='a my-custom-btn' icindekiIcon={PlayIcon} />
         </div>
        </div>
        <div className="introduction_right_side col-12 col-md-6">
            <img src={introductionSekil} alt="Artificial" className='w-100 h-100' />
        </div>
    </section>
  )
}

export default Introduction