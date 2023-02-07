import React from 'react';
import '../assets/css/Button.css';

const Button = (props) => {
  return (
    <button className={props.klassAdi}>{props.icindekiYazi}</button>
  )
}

export default Button