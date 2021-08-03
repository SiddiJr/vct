import Head from 'next/head'
import GrupoA from '../components/BR/Challengers 1/groupA'
import GroupB from '../components/BR/Challengers 1/groupB'
import Positions from '../components/BR/Challengers 1/positions'
import NavBar from '../components/navbar'

export default function Challengers1() {
  return (
    <div>
      <Head>
        <title>VCT - Challengers 1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <NavBar />
        <section className="grupos">
          <GrupoA className="groupA" />
          <GroupB className="groupB" />
          <Positions />
        </section>
      </main>
    </div>
  )
}
