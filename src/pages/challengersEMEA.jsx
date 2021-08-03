import Head from 'next/head'
import React from 'react'
import Playoffs from '../components/EMEA/Challengers Finals/playoffs'
import Positions from '../components/EMEA/Challengers Finals/positions'
import NavBar from '../components/navbar'

function challengersEMEA() {
  return (
    <>
      <Head>
        <title>VCT: Challengers Playoffs(EMEA)</title>
      </Head>

      <main>
        <NavBar />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'none', gridTemplateAreas: 'Playoffs Positions' }}>
          <Playoffs />
          <Positions />
        </div>
      </main>
    </>
  )
}

export default challengersEMEA
