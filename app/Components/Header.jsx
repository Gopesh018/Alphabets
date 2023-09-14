import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar" >
                    <div className="nav-left">
                        <h1>Alphabets</h1>
                        <h1>Alphabets</h1>
                    </div>
                    <div className="nav-right">
                        <Link href={"Home"}>Home</Link>
                        <Link href={"About"}>About</Link>
                        <Link href={"Contact"}>Contact</Link>
                        <Link href={"Courses"}>Courses</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header