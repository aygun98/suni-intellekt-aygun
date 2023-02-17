import React from 'react';
import Button from '../components/Button';
//
import '../pages/css/contact.css'

const Contact = () => {
    return (

        <div className=' display-1 text-white p-5 m-5 text-center '>
            <form action="" className='form-contain'>
               
                    <div className="mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <input type="text" className="form-control p-2" id="exampleFormControlInput1" placeholder="adini yaz" />
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"  placeholder='Example textarea'></textarea>
                    </div>
                    <Button tipi='submit' icindekiYazi='Enter' klassAdi='form-btn m-3 text-white' />
                
            </form>
        </div>

    )
}

export default Contact