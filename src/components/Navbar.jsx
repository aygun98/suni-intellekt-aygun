import React from 'react'
//css
import '../assets/css/Navbar.css'
//img elave edilmesi
import logoShekil from '../assets/images/logo.svg'
//iconlarin elave edilmesi
import { GiCrossedBones } from 'react-icons/gi'
import { AiOutlineBars } from 'react-icons/ai'
import Button from './Button'


function Navbar() {
    return (
        <>
            <div className="overlay">
                <GiCrossedBones className='gicross-icon' />
                <div className='overlay-nav'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navpadding">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logoShekil} alt="suni intellekt" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineBars className='aibars-icon' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>


                        <Button />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar