import React, {useRef} from 'react';
//emailjs
import emailjs from '@emailjs/browser';
//oz butonmuz
import Button from '../components/Button';
//
import '../pages/css/contact.css'

const Contact = () => {
    const formunUnvaniRef = useRef()
    const forumMelumatiniGonder = e => {
        e.preventDefault()

        emailjs.sendForm('service_tdljwia', 'template_o1rj2rt', formunUnvaniRef.current, 'b8zLQ2-MXxCE83kPS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      //reset elemek
      formunUnvaniRef.current.reset() 
  };
    
    return (

        <div className=' display-1 text-white p-5 m-5 text-center '>
            <form action="" className='form-contain' ref={formunUnvaniRef} onSubmit={forumMelumatiniGonder}>
               
                    <div className="mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <input name='fullname' type="text" className="form-control p-2" id="exampleFormControlInput1" placeholder="adini yaz" />
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <input name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <input name='phone' type="phone" className="form-control" id="exampleFormControlInput1" placeholder="nomreni daxil et" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="1"  placeholder='Example textarea'></textarea>
                    </div>
                    <Button tipi='submit' icindekiYazi='Enter' klassAdi='form-btn m-3 text-white' />
                
            </form>
        </div>

    )
}

export default Contact