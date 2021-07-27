import React, { useContext } from 'react'
import { heightStats } from '../height';

function GrupoA() {

    const [height, setHeight] = useContext(heightStats)

    return (
        <div className="groupA">
            <h2 className="group-title">Grupo A</h2>

            <div className="semi">
                <h3 className="bracket-title">Upper</h3>
                <div className="cursor" onClick={() => {
                    height === '45px' ? setHeight('628px') : setHeight('45px')
                }}>
                    <div className="bracket">
                        <span className="win">Team Vikings</span>
                        <div className="score">13</div>
                    </div>

                    <div className="bracket">
                        <span className="lose">Stars Horizon</span>
                        <div className="score lose">9</div>
                    </div>
                </div>

                <section className="cursor" onClick={() => {
                    height === '45px' ? setHeight('628px') : setHeight('45px')
                }}>
                    <div className="bracket match">
                        <span className="win">FURIA</span>
                        <div className="score">13</div>
                    </div>

                    <div className="bracket">
                        <span className="lose">SLICK</span>
                        <div className="score lose">4</div>
                    </div>
                </section>

                <h3 className="bracket-title">Bottom</h3>
                <section className="cursor" onClick={() => {
                    height === '45px' ? setHeight('628px') : setHeight('45px')
                }}>
                    <div className="bracket">
                        <span className="lose">Stars Horizon</span>
                        <div className="score lose">0</div>
                    </div>

                    <div className="bracket">
                        <span className="win">SLICK</span>
                        <div className="score">2</div>
                    </div>
                </section>
            </div>

            <div className="secondpart">
                <h3 className="bracket-title">Winners</h3>
                <section className="winner cursor" onClick={() => {
                    height === '45px' ? setHeight('628px') : setHeight('45px')
                }}>
                    <div className="bracket">
                        <span className="win">Team Vikings</span>
                        <div className="score">2</div>
                    </div>

                    <div className="bracket">
                        <span className="lose">FURIA</span>
                        <div className="score lose">1</div>
                    </div>
                </section>

                <h3 className="bracket-title">Decider</h3>
                <section className="cursor" onClick={() => {
                    height === '45px' ? setHeight('628px') : setHeight('45px')
                }}>
                    <div className="bracket">
                        <span className="win">FURIA</span>
                        <div className="score">2</div>
                    </div>

                    <div className="bracket">
                        <span className="lose">SLICK</span>
                        <div className="score lose">0</div>
                    </div>
                </section>
            </div>

            <div className="qualified">
                <div>
                    <h3 className="bracket-title">Qualified</h3>

                    <div className="bracket">
                        <span className="win">Team Vikings</span>
                    </div>
                </div>

                <div className="qualified-bottom">
                    <h3 className="bracket-title">Qualified</h3>

                    <div className="bracket">
                        <span className="win">FURIA</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrupoA;