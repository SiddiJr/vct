import Link from 'next/link'
import React from 'react'

function UpcomingMatches() {

  const style = {
    divConteiner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      borderRadius: '5px',
      fontWeight: 'normal'
    },
    teamName: {
      textAlign: 'center',
      fontSize: '1.2rem',
      marginTop: '10px',
      fontWeight: 'normal'
    },
    match1: {
      backgroundColor: 'white',
      width: '80%',
      paddingTop: '10px',
      textAlign: 'center'
    },
    match2: {
      borderTop: '1px solid black',
      backgroundColor: 'white',
      width: '80%',
      paddingTop: '10px',
      borderRadius: '0 0 5px 5px',
      textAlign: 'center'
    },
    link: {
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }
  }

  return (
    <div style={style.divConteiner}>
      <span style={{ backgroundColor: 'white', width: '80%', borderBottom: '3px solid black', borderRadius: '5px 5px 0 0' }}>
        <h1 style={{ fontSize: '1.5rem', textAlign: 'center' }}>Upcoming matches</h1>
      </span>
      <div style={style.match1}>
        <Link href='/challengers3'>
          <a style={style.link}>Series 3: Challengers 3(BR)</a>
        </Link>
        <span>
          <h3 style={style.teamName}>Vivo Keyd</h3>
          <h3 style={style.teamName}>Havan Liberty</h3>

          <h3 style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'normal', paddingBottom: '10px' }}>08/07/2021, 05:00PM</h3>
        </span>
      </div>

      <div style={style.match2}>
        <Link href='/challengers3'>
          <a style={style.link}>Series 3: Challengers 3(BR)</a>
        </Link>
        <span>
          <h3 style={style.teamName}>Jaguares Esports</h3>
          <h3 style={style.teamName}>FURIA</h3>
        </span>

        <span>
          <h3 style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'normal', paddingBottom: '10px' }}>08/07/2021, 08:00PM</h3>
        </span>
      </div>
    </div>
  )
}

export default UpcomingMatches
