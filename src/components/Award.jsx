import React from 'react'
import '../assets/css/Award.css'

const Award = ({ MukafatSekilprops, MukafatBasliqprops, MukafatMetinprops }) => {
  return (
    <div className='card-continer col-12 col-md-6 col-lg-3 col-xl-2'>
      <div class="card">
        <img src={MukafatSekilprops} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{MukafatBasliqprops}</h5>
          <p class="card-text">{MukafatMetinprops}</p>

        </div>
      </div>
    </div>
  )
}

export default Award