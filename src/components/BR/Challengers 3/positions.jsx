import Link from 'next/link'
import React from 'react'

function matches() {

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
    <table className='premiacao'>
      <thead>
        <tr style={style.rowHead}>
          <th className="posicao" style={style.th}>Posição</th>
          <th className="premio" style={style.th}>Premio</th>
          <th className="seed" style={style.th}>Seed</th>
          <th className="time" style={style.thTime}>Time</th>
        </tr>
      </thead>

      <tr>
        <td className="data">1º - 2º</td>
        <td className="data">R$15.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">1º - 2º</td>
        <td className="data">R$15.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">3º - 4º</td>
        <td className="data">R$10.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">3º - 4º</td>
        <td className="data">R$10.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">5º - 8º</td>
        <td className="data">-</td>
        <td className="data">-</td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">5º - 8º</td>
        <td className="data">-</td>
        <td className="data">-</td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">5º - 8º</td>
        <td className="data">-</td>
        <td className="data">-</td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>

      <tr>
        <td className="data">5º - 8º</td>
        <td className="data">-</td>
        <td className="data">-</td>
        <td className="data" style={{ width: '130px' }}>TBD</td>
      </tr>
    </table>
  )
}

export default matches
