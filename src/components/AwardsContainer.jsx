import React from 'react'
import Award from './Award'
import MukafatMelumatlari from '../mukafatMelumatlari.json'

const AwardsContainer = () => {
  return (
    <div className=" awards-continer  row justify-content-center ">
       {
        MukafatMelumatlari.map(melumat =>(
            <Award MukafatSekilprops={melumat.mukafatinsekli} MukafatBasliqprops={melumat.mukafatinbasligi} MukafatMetinprops={melumat.mukafatinmetni}/>
        ))
       }
    
   
    </div>
  )
}

export default AwardsContainer