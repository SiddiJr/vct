import Link from 'next/link'
import React from 'react'

function matches() {
  return (
    <table className='premiacao'>
      <tr>
        <th className="posicao">Posição</th>
        <th className="premio">Premio</th>
        <th className="seed">Seed</th>
        <th className="time">Time</th>
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
