import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function NavBar() {
  const style = {
    navbar: {
      backgroundColor: '#474747',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '15vh',
      borderBottom: '2px solid black'
    },
    link: {
      padding: '8px 32px',
      textDecoration: 'none',
      fontSize: '1.45rem',
      color: '#0e1922'
    },
    listItem: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end'
    }
  }

  return (
    <>
      <nav style={style.navbar}>
        <Link href="/">
          <a style={{ marginLeft: '20px' }}>
            <Image src='/Logo2021.png' alt='Circuit Logo' width={450} height={100} />
          </a>
        </Link>

        <ul style={style.listItem}>
          <li>
            <Link href="/"><a style={style.link}>Home</a></Link>
          </li>

          <li>
            <Link href="/"><a style={style.link}>Circuit Points</a></Link>
          </li>

          <li>
            <Link href="/"><a style={style.link}>Tournaments</a></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
