import React from 'react'

function Matches() {
  return (
    <table className="jogos">
      <thead>
        <tr>
          <th colSpan="3" className="border-bottom">Próximos Jogos e Encerrados</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="pad partida-score">
            <span>Team Vikings</span>
          </td>

          <td className="partida-score">
            <span>13 (2)</span>
          </td>

          <td rowSpan="2">
            <span className="dia">Encerrado</span>
          </td>
        </tr>

        <tr>
          <td className="pad">
            <span>FURIA</span>
          </td>

          <td>
            <span>5 (1)</span>
          </td>
        </tr>

        <tr>
          <td className="partida pad">
            <span>Sharks Esports</span>
          </td>

          <td>
            <span>6 (1)</span>
          </td>

          <td rowSpan="2">
            <span className="dia">Encerrado</span>
          </td>
        </tr>

        <tr>
          <td className="pad">
            <span>Gamelanders Blue</span>
          </td>

          <td>
            <span>13 (2)</span>
          </td>
        </tr>

        <tr>
          <td className="partida pad">
            <span>FURIA</span>
          </td>

          <td>
            <span>14 (2)</span>
          </td>

          <td rowSpan="2">
            <span className="dia">Encerrado</span>
          </td>
        </tr>

        <tr>
          <td className="pad">
            <span>SLICK</span>
          </td>

          <td>
            <span>12 (0)</span>
          </td>
        </tr>

        <tr>
          <td className="partida pad">
            <span>Sharks</span>
          </td>

          <td>
            <span>13 (2)</span>
          </td>

          <td rowSpan="2">
            <span className="dia">Encerrado</span>
          </td>
        </tr>

        <tr>
          <td className="pad">
            <span>NOORG 2.0</span>
          </td>

          <td>
            <span>8 (1)</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Matches;