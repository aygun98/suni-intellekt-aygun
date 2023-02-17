import React from 'react';
import '../assets/css/Button.css';

const Button = (props) => {
  
  
  return (
    <button type={props.tipi} className={props.klassAdi}>{props.icindekiYazi}</button>
  )
}
{/* <img className='playicon' src={props.icindekiIcon} alt="icon" /> */}
export default Button