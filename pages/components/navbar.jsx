import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-ul">
                    <li>
                        <Link href="#"><a className='navbar-link'>Home</a></Link>
                    </li>

                    <li>
                        <Link href="#"><a className='navbar-link'>Cadastro</a></Link>
                    </li>

                    <li>
                        <Link href="#"><a className='navbar-link'>Tabelas</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;