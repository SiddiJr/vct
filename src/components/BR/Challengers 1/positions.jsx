import React from 'react'
import Link from 'next/link'

function Positions() {

  const style = {
    rowHead: {
      borderBottom: '1px solid black'
    },
    th: {
      width: '140px',
      height: '65.05px'
    },
    thTime: {
      width: '140px',
      height: '65.05px',
      borderRight: 'none'
    }
  }

  return (
    <table className="premiacao" style={{ borderRadius: '3px' }}>
      <thead>
        <tr style={style.rowHead}>
          <th className="posicao" style={style.th}>Posição</th>
          <th className="premio" style={style.th}>Premio</th>
          <th className="seed" style={style.th}>Seed</th>
          <th className="time" style={style.thTime}>Time</th>
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