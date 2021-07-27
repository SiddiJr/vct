import React from 'react'
import Link from 'next/link'

function Positions() {
    return (
        <table className="premiacao">
            <thead>
                <tr>
                    <th className="posicao">Posição</th>
                    <th className="premio">Premio</th>
                    <th className="seed">Seed</th>
                    <th className="time">Time</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="data">1º - 2º</td>
                    <td className="data">R$15.000</td>
                    <td className="data">
                        <Link href="/">
                            <a className="premiacao-link">
                                Challengers 2</a>
                        </Link></td>
                    <td className="data">Team Vikings</td>
                </tr>

                <tr>
                    <td className="data">1º - 2º</td>
                    <td className="data">R$15.000</td>
                    <td className="data">
                        <Link href="/">
                            <a className="premiacao-link" >
                                Challengers 2</a>
                        </Link></td>
                    <td className="data">Gamelanders Blue</td>
                </tr>

                <tr>
                    <td className="data">3º - 4º</td>
                    <td className="data">R$10.000</td>
                    <td className="data">
                        <Link href="/">
                            <a className="premiacao-link">
                                Challengers 2</a>
                        </Link></td>
                    <td className="data">FURIA</td>
                </tr>

                <tr>
                    <td className="data">3º - 4º</td>
                    <td className="data">R$10.000</td>
                    <td className="data">
                        <Link href="/">
                            <a className="premiacao-link">
                                Challengers 2
                            </a>
                        </Link></td>
                    <td className="data">Sharks Esports</td>
                </tr>

                <tr>
                    <td className="data">5º - 6º</td>
                    <td className="data">-</td>
                    <td className="data">-</td>
                    <td className="data">NOORG 2.0</td>
                </tr>

                <tr>
                    <td className="data">5º - 6º</td>
                    <td className="data">-</td>
                    <td className="data">-</td>
                    <td className="data">SLICK</td>
                </tr>

                <tr>
                    <td className="data">7º - 8º</td>
                    <td className="data">-</td>
                    <td className="data">-</td>
                    <td className="data">Stars Horizon</td>
                </tr>

                <tr>
                    <td className="data">7º - 8º</td>
                    <td className="data">-</td>
                    <td className="data">-</td>
                    <td className="data">Havan Liberty</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Positions;