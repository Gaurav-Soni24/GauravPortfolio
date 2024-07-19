import React from 'react'
import Link from 'next/link'
import './Style/Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <Link href='' className="logo">Protfolio</Link>

            <nav className="navbar">
                <Link href="/Home" className='Links'>Home</Link>
                <Link href="/About" className='Links'>About</Link>
                <Link href="/Skills" className='Links'>Skills</Link>
                <Link href="/Projects" className='Links'>Projects</Link>
            </nav>
        </div>
    )
}

export default Navbar
