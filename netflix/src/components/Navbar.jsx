import './Navbar.css'
import { useEffect, useState } from 'react'
import React from 'react'

function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        });

    }, [])


    return (
        <div className={`nav ${show &&"nav_black"}`}>
            <img
                className='logo'
                src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png '
                alt="netflixlogo"
            />
            

        </div>

    )
}

export default Navbar