import React from 'react'
import Head from 'next/head'
import OnGoingTournaments from '../components/Homepage/liveTournaments'
import NavBar from '../components/navbar'
import UpcomingMatches from '../components/Homepage/upcomingMatches'

export default function Home() {
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
        <UpcomingMatches />
        <OnGoingTournaments />
      </main>
    </div>
  )
}
