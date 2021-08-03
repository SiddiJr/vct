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
        <td className="data" style={{ width: '130px' }}>Stars Horizon</td>
      </tr>

      <tr>
        <td className="data">1º - 2º</td>
        <td className="data">R$15.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>Sharks Esports</td>
      </tr>

      <tr>
        <td className="data">3º - 4º</td>
        <td className="data">R$10.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>Team Vikings</td>
      </tr>

      <tr>
        <td className="data">3º - 4º</td>
        <td className="data">R$10.000</td>
        <td className="data">
          <Link href="/">
            <a className="premiacao-link">Challengers Finals</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px', height: '68px' }}>Gamelanders Blue</td>
      </tr>

      <tr>
        <td className="data">5º - 6º</td>
        <td className="data">-</td>
        <td className="data">
          <Link href="/challengers3">
            <a>Challengers 3</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>NOORG 2.0</td>
      </tr>

      <tr>
        <td className="data">5º - 6º</td>
        <td className="data">-</td>
        <td className="data">
          <Link href="/challengers3">
            <a>Challengers 3</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>SLICK</td>
      </tr>

      <tr>
        <td className="data">7º - 8º</td>
        <td className="data">-</td>
        <td className="data">
          <Link href="/challengers3">
            <a>Challengers 3</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>Ingame</td>
      </tr>

      <tr>
        <td className="data">7º - 8º</td>
        <td className="data">-</td>
        <td className="data">
          <Link href="/challengers3">
            <a>Challengers 3</a>
          </Link>
        </td>
        <td className="data" style={{ width: '130px' }}>FURIA</td>
      </tr>
    </table >
  )
}

export default matches
