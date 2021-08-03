import React from 'react'
import Link from 'next/link'

function Positions() {
  return (
    <table className="premiacao">
      <thead>
        <tr>
          <th className="posicao" style={{ width: '63.86px', height: '60px' }}>Posição</th>
          <th className="premio" style={{ width: '63.86px', height: '60px' }}>Premio</th>
          <th className="seed" style={{ width: '63.86px', height: '60px' }}>Seed</th>
          <th className="time" style={{ width: '63.86px', height: '60px' }}>Time</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="data">1º - 2º</td>
          <td className="data">R$15.000</td>
          <td className="data" style={{ width: '130px' }}>
            <Link href="/challengers2">
              <a className="premiacao-link">
                Challengers 2</a>
            </Link></td>
          <td className="data" style={{ width: '130px' }}>Team Vikings</td>
        </tr>

        <tr>
          <td className="data">1º - 2º</td>
          <td className="data">R$15.000</td>
          <td className="data">
            <Link href="/challengers2" style={{ width: '130px' }}>
              <a className="premiacao-link" >
                Challengers 2</a>
            </Link></td>
          <td className="data" style={{ width: '130px', height: '69px' }}>Gamelanders Blue</td>
        </tr>

        <tr>
          <td className="data">3º - 4º</td>
          <td className="data">R$10.000</td>
          <td className="data">
            <Link href="/challengers2" style={{ width: '130px' }}>
              <a className="premiacao-link">
                Challengers 2</a>
            </Link></td>
          <td className="data" style={{ width: '130px' }}>FURIA</td>
        </tr>

        <tr>
          <td className="data">3º - 4º</td>
          <td className="data">R$10.000</td>
          <td className="data">
            <Link href="/challengers2" style={{ width: '130px' }}>
              <a className="premiacao-link">
                Challengers 2
              </a>
            </Link></td>
          <td className="data" style={{ width: '130px' }}>Sharks Esports</td>
        </tr>

        <tr>
          <td className="data">5º - 6º</td>
          <td className="data">-</td>
          <td className="data">-</td>
          <td className="data" style={{ width: '130px' }}>NOORG 2.0</td>
        </tr>

        <tr>
          <td className="data">5º - 6º</td>
          <td className="data">-</td>
          <td className="data">-</td>
          <td className="data" style={{ width: '130px' }}>SLICK</td>
        </tr>

        <tr>
          <td className="data">7º - 8º</td>
          <td className="data">-</td>
          <td className="data">-</td>
          <td className="data" style={{ width: '130px' }}>Stars Horizon</td>
        </tr>

        <tr>
          <td className="data">7º - 8º</td>
          <td className="data">-</td>
          <td className="data">-</td>
          <td className="data" style={{ width: '130px' }}>Havan Liberty</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Positions;