import React, { useContext } from 'react'
import { heightStats } from "../height"
import VikingsxFURIA from './iframe/VikingsxFURIA/VikingsxFURIA'
import VikingsxSH from './iframe/VikingsxSH/VikingsxSH'

function Stats() {

    const [height, setHeight] = useContext(heightStats)

    return (
        <section className="stats" id="stats" style={{ height: height }}>
            <div style={{ display: 'flex' }}>
                <span className="stats-title" id="stats-title">Estatísticas</span>
                <span style={{ alignSelf: 'flex-end' }}>&#9660;</span>
            </div>

            <VikingsxSH />
            <VikingsxFURIA />
        </section>
    )
}

export default Stats;