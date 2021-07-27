import Head from 'next/head'
import { useState } from 'react'
import { heightStats } from './height'
import GrupoA from './components/groupA'
import GroupB from './components/groupB'
import Matches from './components/matches'
import NavBar from './components/navbar'
import Positions from './components/positions'
import Stats from './components/stats'

export default function Home() {
  const [height, setHeight] = useState('45px')

  return (
    <div>
      <Head>
        <title>VCT - Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-16x16.png" type="image" />
      </Head>

      <main>
        <NavBar />

        <heightStats.Provider value={[height, setHeight]}>
          <section className="grupos">
            <GrupoA className="groupA" />
            <GroupB className="groupB" />

            <Positions className="premiacao" />
            <Matches className="jogos" />
          </section>
          <Stats />
        </heightStats.Provider>

      </main>
    </div>
  )
}
