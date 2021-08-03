import Link from 'next/link'
import React from 'react'

function OnGoingTournaments() {

  const style = {
    divContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop: '40px',
      margin: '40px 143px 0 143px',
      borderRadius: '5px'
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      borderBottom: '4px solid black',
      width: '79vw',
      textAlign: 'center',
      marginTop: '15px',
      paddingBottom: '15px'
    },
    divName: {
      fontSize: '1.2rem',
      width: '80vw',
      textAlign: 'center',
      marginTop: '15px',
      paddingBottom: '5px'
    },
    divDate: {
      borderBottom: '2px solid black',
      textAlign: 'center',
      width: '79vw',
      paddingBottom: '15px'
    }
  }

  return (
    <div>
      <div style={style.divContainer}>
        <div style={style.title}>
          <span>Ongoing Tournaments</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers 2(EU)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 21 - Aug 2</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers 2(TR)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 20 - 31</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers 2(CIS)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 20 - 31</span>
        </div>

        <div style={style.divName}>
          <Link href='/challengers3'>
            <a>Series 3: Challengers 3(BR)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 20 - 31</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers(KR)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 20 - 31</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers 2(LATAM)</a>
          </Link>
        </div>

        <div style={style.divDate}>
          <span>Jul 20 - 31</span>
        </div>

        <div style={style.divName}>
          <Link href='/'>
            <a>Series 3: Challengers 2(NA)</a>
          </Link>
        </div>

        <div style={{ textAlign: 'center', width: '79vw', marginBottom: '15px' }}>
          <span>Jul 20 - 31</span>
        </div>
      </div>
    </div >
  )
}

export default OnGoingTournaments
