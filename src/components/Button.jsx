import React from 'react';
import '../assets/css/Button.css';

const Button = ({tipi, klassAdi, icindekiYazi,icindekiIcon}) => {
  
  
  return (
    <button type={tipi} className={klassAdi}>{icindekiIcon &&  <img src={icindekiIcon} alt="icon" />}{icindekiYazi}</button>
  )
}

export default Button