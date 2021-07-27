import React from 'react'

function VikingsxFURIA() {
    return (
        <div style={{ display: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5px' }}>
                <button className="mapName2" id="button-map1" style={{ cursor: 'pointer' }}><span className="active" id="map1Name">BIND
                    (Team Vikings)</span></button>
                <button className="mapName2" id="button-map2" style={{ cursor: 'pointer' }}><span id="map2Name">HAVEN
                    (FURIA)</span></button>
                <button className="mapName2" id="button-map3" style={{ cursor: 'pointer' }}><span id="map3Name">ICEBOX
                    (Decider)</span></button>
            </div>

            <div id="map1">
                <div>
                    <div>
                        <h2 className="team1Name">Team Vikings</h2>
                        <div className="team1Rounds">13</div>
                        <div className="team1Half-loser">7/6</div>

                        <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                            <table className="width">
                                <thead>
                                    <tr>
                                        <th>Player</th>

                                        <th>Agent</th>

                                        <th title="Average Combat Score">ACS</th>

                                        <th title="Kills / Deaths / Assists">K / D / A</th>

                                        <th>Kills - Deaths</th>

                                        <th title="Average Damage per Round">ADR</th>

                                        <th>Headshot %</th>

                                        <th>First Kills</th>

                                        <th>First Deaths</th>

                                        <th>Kills - Deaths</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                Sacy
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Jett</span>
                                        </td>

                                        <td className="center">
                                            <span>267</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">22</span>
                                                <span>/</span>
                                                <span className="kda">19</span>
                                                <span>/</span>
                                                <span className="kda">3</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>+3 </span>
                                        </td>

                                        <td className="center">
                                            <span>145.9</span>
                                        </td>

                                        <td className="center">
                                            <span>38%</span>
                                        </td>

                                        <td className="center">
                                            <span>4</span>
                                        </td>

                                        <td className="center">
                                            <span>6</span>
                                        </td>

                                        <td className="center">
                                            <span>-2 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                sutecas
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Viper</span>
                                        </td>

                                        <td className="center">
                                            <span>221</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">17</span>
                                                <span>/</span>
                                                <span className="kda">16</span>
                                                <span>/</span>
                                                <span className="kda">9</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>+1 </span>
                                        </td>

                                        <td className="center">
                                            <span>145.9</span>
                                        </td>

                                        <td className="center">
                                            <span>22%</span>
                                        </td>

                                        <td className="center">
                                            <span>2</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>+1 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                gtnziN
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Sage</span>
                                        </td>

                                        <td className="center">
                                            <span>221</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">16</span>
                                                <span>/</span>
                                                <span className="kda">16</span>
                                                <span>/</span>
                                                <span className="kda">8</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>0 </span>
                                        </td>

                                        <td className="center">
                                            <span>139.3</span>
                                        </td>

                                        <td className="center">
                                            <span>24%</span>
                                        </td>

                                        <td className="center">
                                            <span>4</span>
                                        </td>

                                        <td className="center">
                                            <span>2</span>
                                        </td>

                                        <td className="center">
                                            <span>+2 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                saadhak
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Brimstone</span>
                                        </td>

                                        <td className="center">
                                            <span>193</span>
                                        </td>

                                        <td style={{ width: '10%', textAlign: 'center', paddingLeft: '10px' }}>
                                            <div>
                                                <span style={{ padding: '3px' }}>16</span>
                                                <span>/</span>
                                                <span className="kda">17</span>
                                                <span>/</span>
                                                <span className="kda">13</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>-1 </span>
                                        </td>

                                        <td className="center">
                                            <span>122.8</span>
                                        </td>

                                        <td className="center">
                                            <span>16%</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>3</span>
                                        </td>

                                        <td className="center">
                                            <span>-2 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                frz
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Skye</span>
                                        </td>

                                        <td className="center">
                                            <span>168</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">16</span>
                                                <span>/</span>
                                                <span className="kda">13</span>
                                                <span>/</span>
                                                <span className="kda">2</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>+3 </span>
                                        </td>

                                        <td className="center">
                                            <span>105.0</span>
                                        </td>

                                        <td className="center">
                                            <span>35%</span>
                                        </td>

                                        <td className="center">
                                            <span>0</span>
                                        </td>

                                        <td className="center">
                                            <span>0</span>
                                        </td>

                                        <td className="center">
                                            <span>0 </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="team1Name">FURIA</h2>
                        <div className="team1Rounds">10</div>
                        <div className="team1Half-winner">5/5</div>

                        <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                            <table className="width">
                                <thead>
                                    <tr>
                                        <th>Player</th>

                                        <th>Agent</th>

                                        <th title="Average Combat Score">ACS</th>

                                        <th title="Kills / Deaths / Assists">K / D / A</th>

                                        <th>Kills - Deaths</th>

                                        <th title="Average Damage per Round">ADR</th>

                                        <th>Headshot %</th>

                                        <th>First Kills</th>

                                        <th>First Deaths</th>

                                        <th>Kills - Deaths</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                Nozwerr
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Sova</span>
                                        </td>

                                        <td className="center">
                                            <span>307</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">24</span>
                                                <span>/</span>
                                                <span className="kda">15</span>
                                                <span>/</span>
                                                <span className="kda">3</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>+9 </span>
                                        </td>

                                        <td className="center">
                                            <span>185.0</span>
                                        </td>

                                        <td className="center">
                                            <span>16%</span>
                                        </td>

                                        <td className="center">
                                            <span>2</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>+1 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                Quick
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Viper</span>
                                        </td>

                                        <td className="center">
                                            <span>261</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">21</span>
                                                <span>/</span>
                                                <span className="kda">17</span>
                                                <span>/</span>
                                                <span className="kda">6</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>+4 </span>
                                        </td>

                                        <td className="center">
                                            <span>148.0</span>
                                        </td>

                                        <td className="center">
                                            <span>27%</span>
                                        </td>

                                        <td className="center">
                                            <span>8</span>
                                        </td>

                                        <td className="center">
                                            <span>2</span>
                                        </td>

                                        <td className="center">
                                            <span>+6 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                Mazin
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Raze</span>
                                        </td>

                                        <td className="center">
                                            <span>194</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">14</span>
                                                <span>/</span>
                                                <span className="kda">19</span>
                                                <span>/</span>
                                                <span className="kda">5</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>-5 </span>
                                        </td>

                                        <td className="center">
                                            <span>121.9</span>
                                        </td>

                                        <td className="center">
                                            <span>12%</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>5</span>
                                        </td>

                                        <td className="center">
                                            <span>-4 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                Khalil
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Brimstone</span>
                                        </td>

                                        <td className="center">
                                            <span>129</span>
                                        </td>

                                        <td className='data-cell'>
                                            <div>
                                                <span className="kda">12</span>
                                                <span>/</span>
                                                <span className="kda">15</span>
                                                <span>/</span>
                                                <span className="kda">9</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>-3 </span>
                                        </td>

                                        <td className="center">
                                            <span>89.7</span>
                                        </td>

                                        <td className="center">
                                            <span>24%</span>
                                        </td>

                                        <td className="center">
                                            <span>0</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>-1 </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="center player">
                                            <div
                                                style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                                xand
                                            </div>
                                        </td>

                                        <td className="center agent">
                                            <span>Dkye</span>
                                        </td>

                                        <td className="center">
                                            <span>114</span>
                                        </td>

                                        <td style={{ width: '10%', textAlign: 'center', paddingLeft: '7px' }}>
                                            <div>
                                                <span className="kda">8</span>
                                                <span>/</span>
                                                <span className="kda">21</span>
                                                <span>/</span>
                                                <span className="kda">5</span>
                                            </div>
                                        </td>

                                        <td className="center">
                                            <span>-13 </span>
                                        </td>

                                        <td className="center">
                                            <span>69.9</span>
                                        </td>

                                        <td className="center">
                                            <span>11%</span>
                                        </td>

                                        <td className="center">
                                            <span>1</span>
                                        </td>

                                        <td className="center">
                                            <span>2</span>
                                        </td>

                                        <td className="center">
                                            <span>-1 </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div id="map2" hidden>
                <div>
                    <h2 className="team1Name">Team Vikings</h2>
                    <div className="team1Rounds">10</div>
                    <div className="team1Half-loser">7/3</div>

                    <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                        <table className="width">
                            <thead>
                                <tr>
                                    <th>Player</th>

                                    <th>Agent</th>

                                    <th title="Average Combat Score">ACS</th>

                                    <th title="Kills / Deaths / Assists">K / D / A</th>

                                    <th>Kills - Deaths</th>

                                    <th title="Average Damage per Round">ADR</th>

                                    <th>Headshot %</th>

                                    <th>First Kills</th>

                                    <th>First Deaths</th>

                                    <th>Kills - Deaths</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            sutecas
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>cypher</span>
                                    </td>

                                    <td className="center">
                                        <span>276</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">25</span>
                                            <span>/</span>
                                            <span className="kda">17</span>
                                            <span>/</span>
                                            <span className="kda">3</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+8 </span>
                                    </td>

                                    <td className="center">
                                        <span>173.7</span>
                                    </td>

                                    <td className="center">
                                        <span>29%</span>
                                    </td>

                                    <td className="center">
                                        <span>3</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>+2 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            gtnziN
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Phoenix</span>
                                    </td>

                                    <td className="center">
                                        <span>221</span>
                                    </td>

                                    <td style={{ width: '10%', textAlign: 'center', paddingLeft: '10px' }}>
                                        <div>
                                            <span style={{ padding: '3px' }}>16</span>
                                            <span>/</span>
                                            <span className="kda">18</span>
                                            <span>/</span>
                                            <span className="kda">10</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-2 </span>
                                    </td>

                                    <td className="center">
                                        <span>170.6</span>
                                    </td>

                                    <td className="center">
                                        <span>26%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            saadhak
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Omen</span>
                                    </td>

                                    <td className="center">
                                        <span>193</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">9</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>

                                    <td className="center">
                                        <span>117.5</span>
                                    </td>

                                    <td className="center">
                                        <span>20%</span>
                                    </td>

                                    <td className="center">
                                        <span>4</span>
                                    </td>

                                    <td className="center">
                                        <span>4</span>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Sacy
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Jett</span>
                                    </td>

                                    <td className="center">
                                        <span>180</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">15</span>
                                            <span>/</span>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">5</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>

                                    <td className="center">
                                        <span>118.3</span>
                                    </td>

                                    <td className="center">
                                        <span>44%</span>
                                    </td>

                                    <td className="center">
                                        <span>6</span>
                                    </td>

                                    <td className="center">
                                        <span>3</span>
                                    </td>

                                    <td className="center">
                                        <span>+3 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            frz
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>sova</span>
                                    </td>

                                    <td className="center">
                                        <span>179</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">8</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>

                                    <td className="center">
                                        <span>102.9</span>
                                    </td>

                                    <td className="center">
                                        <span>19%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="team1Name">FURIA</h2>
                    <div className="team1Rounds">13</div>
                    <div className="team1Half-winner">5/8</div>

                    <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                        <table className="width">
                            <thead>
                                <tr>
                                    <th>Player</th>

                                    <th>Agent</th>

                                    <th title="Average Combat Score">ACS</th>

                                    <th title="Kills / Deaths / Assists">K / D / A</th>

                                    <th>Kills - Deaths</th>

                                    <th title="Average Damage per Round">ADR</th>

                                    <th>Headshot %</th>

                                    <th>First Kills</th>

                                    <th>First Deaths</th>

                                    <th>Kills - Deaths</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            xand
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Jett</span>
                                    </td>

                                    <td className="center">
                                        <span>255</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">22</span>
                                            <span>/</span>
                                            <span className="kda">20</span>
                                            <span>/</span>
                                            <span className="kda">5</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+2 </span>
                                    </td>

                                    <td className="center">
                                        <span>139.9</span>
                                    </td>

                                    <td className="center">
                                        <span>24%</span>
                                    </td>

                                    <td className="center">
                                        <span>7</span>
                                    </td>

                                    <td className="center">
                                        <span>5</span>
                                    </td>

                                    <td className="center">
                                        <span>+2 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Nozwerr
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Skye</span>
                                    </td>

                                    <td className="center">
                                        <span>227</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">16</span>
                                            <span>/</span>
                                            <span className="kda">17</span>
                                            <span>/</span>
                                            <span className="kda">9</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>

                                    <td className="center">
                                        <span>171.0</span>
                                    </td>

                                    <td className="center">
                                        <span>16%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Quick
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Cypher</span>
                                    </td>

                                    <td className="center">
                                        <span>200</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">15</span>
                                            <span>/</span>
                                            <span className="kda">17</span>
                                            <span>/</span>
                                            <span className="kda">5</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-2 </span>
                                    </td>

                                    <td className="center">
                                        <span>126.3</span>
                                    </td>

                                    <td className="center">
                                        <span>26%</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Khalil
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Omen</span>
                                    </td>

                                    <td className="center">
                                        <span>158</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">13</span>
                                            <span>/</span>
                                            <span className="kda">13</span>
                                            <span>/</span>
                                            <span className="kda">4</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>

                                    <td className="center">
                                        <span>95.4</span>
                                    </td>

                                    <td className="center">
                                        <span>20%</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>4</span>
                                    </td>

                                    <td className="center">
                                        <span>-3 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Mazin
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Sage</span>
                                    </td>

                                    <td className="center">
                                        <span>153</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">11</span>
                                            <span>/</span>
                                            <span className="kda">17</span>
                                            <span>/</span>
                                            <span className="kda">7</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-6 </span>
                                    </td>

                                    <td className="center">
                                        <span>102.4</span>
                                    </td>

                                    <td className="center">
                                        <span>17%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div id="map3" hidden>
                <div>
                    <h2 className="team1Name">Team Vikings</h2>
                    <div className="team1Rounds">13</div>
                    <div className="team1Half-loser">8/5</div>

                    <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                        <table className="width">
                            <thead>
                                <tr>
                                    <th>Player</th>

                                    <th>Agent</th>

                                    <th title="Average Combat Score">ACS</th>

                                    <th title="Kills / Deaths / Assists">K / D / A</th>

                                    <th>Kills - Deaths</th>

                                    <th title="Average Damage per Round">ADR</th>

                                    <th>Headshot %</th>

                                    <th>First Kills</th>

                                    <th>First Deaths</th>

                                    <th>Kills - Deaths</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            gtnziN
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Sage</span>
                                    </td>

                                    <td className="center">
                                        <span>315</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">21</span>
                                            <span>/</span>
                                            <span className="kda">11</span>
                                            <span>/</span>
                                            <span className="kda">3</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+10 </span>
                                    </td>

                                    <td className="center">
                                        <span>155.9</span>
                                    </td>

                                    <td className="center">
                                        <span>21%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            sutecas
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Reyna</span>
                                    </td>

                                    <td className="center">
                                        <span>293</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">19</span>
                                            <span>/</span>
                                            <span className="kda">13</span>
                                            <span>/</span>
                                            <span className="kda">2</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+6 </span>
                                    </td>

                                    <td className="center">
                                        <span>180.1</span>
                                    </td>

                                    <td className="center">
                                        <span>40%</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Sacy
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Jett</span>
                                    </td>

                                    <td className="center">
                                        <span>227</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">12</span>
                                            <span>/</span>
                                            <span className="kda">12</span>
                                            <span>/</span>
                                            <span className="kda">9</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>0 </span>
                                    </td>

                                    <td className="center">
                                        <span>160.3</span>
                                    </td>

                                    <td className="center">
                                        <span>25%</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>6</span>
                                    </td>

                                    <td className="center">
                                        <span>-4 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            saadhak
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Viper</span>
                                    </td>

                                    <td className="center">
                                        <span>202</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">12</span>
                                            <span>/</span>
                                            <span className="kda">11</span>
                                            <span>/</span>
                                            <span className="kda">8</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>

                                    <td className="center">
                                        <span>136.9</span>
                                    </td>

                                    <td className="center">
                                        <span>17%</span>
                                    </td>

                                    <td className="center">
                                        <span>3</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            frz
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Sova</span>
                                    </td>


                                    <td className="center">
                                        <span>179</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span style={{ padding: '7px' }}>7</span>
                                            <span>/</span>
                                            <span className="kda">4</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>+7 </span>
                                    </td>

                                    <td className="center">
                                        <span>109.7</span>
                                    </td>

                                    <td className="center">
                                        <span>46%</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="team1Name">FURIA</h2>
                    <div className="team1Rounds">5</div>
                    <div className="team1Half-winner">4/1</div>

                    <div style={{ overflowX: 'auto', marginTop: '15px', paddingBottom: '5px' }}>
                        <table className="width">
                            <thead>
                                <tr>
                                    <th>Player</th>

                                    <th>Agent</th>

                                    <th title="Average Combat Score">ACS</th>

                                    <th title="Kills / Deaths / Assists">K / D / A</th>

                                    <th>Kills - Deaths</th>

                                    <th title="Average Damage per Round">ADR</th>

                                    <th>Headshot %</th>

                                    <th>First Kills</th>

                                    <th>First Deaths</th>

                                    <th>Kills - Deaths</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Nozwerr
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Sova</span>
                                    </td>

                                    <td className="center">
                                        <span>229</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">14</span>
                                            <span>/</span>
                                            <span className="kda">15</span>
                                            <span>/</span>
                                            <span className="kda">4</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-1 </span>
                                    </td>

                                    <td className="center">
                                        <span>148.3</span>
                                    </td>

                                    <td className="center">
                                        <span>29%</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>+1 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            xand
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Reyna</span>
                                    </td>

                                    <td className="center">
                                        <span>206</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">11</span>
                                            <span>/</span>
                                            <span className="kda">16</span>
                                            <span>/</span>
                                            <span className="kda">3</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-5 </span>
                                    </td>

                                    <td className="center">
                                        <span>95.4</span>
                                    </td>

                                    <td className="center">
                                        <span>23%</span>
                                    </td>

                                    <td className="center">
                                        <span>6</span>
                                    </td>

                                    <td className="center">
                                        <span>3</span>
                                    </td>

                                    <td className="center">
                                        <span>+3 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Khalil
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Viper</span>
                                    </td>

                                    <td className="center">
                                        <span>198</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">13</span>
                                            <span>/</span>
                                            <span className="kda">15</span>
                                            <span>/</span>
                                            <span className="kda">5</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-2 </span>
                                    </td>

                                    <td className="center">
                                        <span>114.7</span>
                                    </td>

                                    <td className="center">
                                        <span>25%</span>
                                    </td>

                                    <td className="center">
                                        <span>3</span>
                                    </td>

                                    <td className="center">
                                        <span>1</span>
                                    </td>

                                    <td className="center">
                                        <span>+2 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Mazin
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Sage</span>
                                    </td>

                                    <td className="center">
                                        <span>185</span>
                                    </td>

                                    <td className='data-cell'>
                                        <div>
                                            <span className="kda">11</span>
                                            <span>/</span>
                                            <span className="kda">16</span>
                                            <span>/</span>
                                            <span className="kda">2</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-5 </span>
                                    </td>

                                    <td className="center">
                                        <span>114.9</span>
                                    </td>

                                    <td className="center">
                                        <span>46%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>-2 </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center player">
                                        <div style={{ fontWeight: '700', paddingBottom: '4px', paddingTop: '2px' }}>
                                            Quick
                                        </div>
                                    </td>

                                    <td className="center agent">
                                        <span>Jett</span>
                                    </td>

                                    <td className="center">
                                        <span>93</span>
                                    </td>

                                    <td style={{ width: '10%', textAlign: 'center', paddingLeft: '7px' }}>
                                        <div>
                                            <span className="kda">5</span>
                                            <span>/</span>
                                            <span className="kda">16</span>
                                            <span>/</span>
                                            <span className="kda">2</span>
                                        </div>
                                    </td>

                                    <td className="center">
                                        <span>-11 </span>
                                    </td>

                                    <td className="center">
                                        <span>59.8</span>
                                    </td>

                                    <td className="center">
                                        <span>22%</span>
                                    </td>

                                    <td className="center">
                                        <span>0</span>
                                    </td>

                                    <td className="center">
                                        <span>2</span>
                                    </td>

                                    <td className="center">
                                        <span>-2 </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VikingsxFURIA
