import Head from 'next/head'
import GrupoA from '../components/BR/Challengers 3/groupA'
import GroupB from '../components/BR/Challengers 3/groupB'
import Positions from '../components/BR/Challengers 3/positions'
import NavBar from '../components/navbar'

export default function Challengers3() {
  return (
    <div>
      <Head>
        <title>VCT - Challengers 3</title>
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
