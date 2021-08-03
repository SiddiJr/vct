import React from 'react'

function Playoffs() {
  const style = {
    matches: {
      border: '2px solid black',
      gridRow: '1/1',
      gridColumn: '1',
      margin: '10px 0 0 25px'
    }
  }

  return (
    <div style={style.matches}>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', marginTop: '15px', marginLeft: '15px' }}>
          <h3 className="bracket-title">Upper</h3>
          <div>
            <div className="bracket">
              <span>Natus Vincere</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>Team Liquid</span>
              <div className="score">0</div>
            </div>
          </div>

          <div>
            <div className="bracket match">
              <span>Guild Esports</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>forZe</span>
              <div className="score">0</div>
            </div>
          </div>

          <div>
            <div className="bracket match">
              <span>FunPlus Phoenix</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>Fire Flux Esports</span>
              <div className="score">0</div>
            </div>
          </div>

          <div>
            <div className="bracket match">
              <span>Oxygen Esports</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>Giants Gaming</span>
              <div className="score">0</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', marginLeft: '15px' }}>
          <h3 className="bracket-title">Upper Quarterfinals</h3>
          <div>
            <div className="bracket">
              <span>TBD</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>TBD</span>
              <div className="score">0</div>
            </div>
          </div>

          <div className="winner cursor">
            <div className="bracket match">
              <span>TBD</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>TBD</span>
              <div className="score">0</div>
            </div>
          </div>

          <div className="winner cursor">
            <div className="bracket match">
              <span>TBD</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>TBD</span>
              <div className="score">0</div>
            </div>
          </div>

          <div className="winner cursor">
            <div className="bracket match">
              <span>TBD</span>
              <div className="score">0</div>
            </div>

            <div className="bracket">
              <span>TBD</span>
              <div className="score">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playoffs;