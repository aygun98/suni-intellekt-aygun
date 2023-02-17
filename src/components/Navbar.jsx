import React, {useRef} from 'react'
//css
import '../assets/css/Navbar.css'
//img elave edilmesi
import logoShekil from '../assets/images/logo.svg'
//iconlarin elave edilmesi
import { GiCrossedBones } from 'react-icons/gi'
import { AiOutlineBars } from 'react-icons/ai'
import Button from './Button'
// router marsut sistemi linki
import { Link } from 'react-router-dom'




function Navbar() {
 const overLayUnvan = useRef()
    const operOverLayMenu = (e) => {
     const kliklediyimunvan = e.target 
     if(kliklediyimunvan.classList.contains('aibars-icon'))
            overLayUnvan.current.classList.add('aktiv')
    }
const closeOverLayMenu = (e) => {
    const kliklediyimunvan = e.target
    if(kliklediyimunvan.classList.contains('gicross-icon')){
        overLayUnvan.current.classList.remove('aktiv')
    }
}
    return (
        <>
            <div className="overlay" ref={overLayUnvan}>
                <GiCrossedBones className='gicross-icon' onClick={closeOverLayMenu} />
                <div className='overlay-nav'>
                    <Link to="/">Home</Link>
                    <Link to="haqqimizda">About</Link>
                    <Link to="xidmetler">Services</Link>
                    <Link to="bloq">Blog</Link>
                    <Link to="elaqe">Contact</Link>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navpadding">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logoShekil} alt="suni intellekt" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineBars className='aibars-icon' onClick={operOverLayMenu} />
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="haqqimizda">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="xidmetler">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="bloq">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="elaqe">Contact</Link>
                            </li>
                        </ul>


                        <Button icindekiYazi='Sign In' klassAdi='my-custom-btn'/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar