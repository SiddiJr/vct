import React from 'react'

function GrupoA({ onHandleClick }) {
  return (
    <div className="groupA">
      <h2 className="group-title">Grupo A</h2>

      <div className="semi">
        <h3 className="bracket-title">Upper</h3>
        <div className="cursor">
          <div className="bracket">
            <span className='lose'>Team Vikings</span>
            <div className="score lose">7</div>
          </div>

          <div className="bracket">
            <span className='win'>Stars Horizon</span>
            <div className="score">13</div>
          </div>
        </div>

        <section className="cursor">
          <div className="bracket match">
            <span className='lose'>FURIA</span>
            <div className="score lose">5</div>
          </div>

          <div className="bracket">
            <span className='win'>NOORG 2.0</span>
            <div className="score">13</div>
          </div>
        </section>

        <h3 className="bracket-title">Bottom</h3>
        <section className="cursor">
          <div className="bracket">
            <span className='win'>Team Vikings</span>
            <div className="score">2</div>
          </div>

          <div className="bracket">
            <span className='lose'>FURIA</span>
            <div className="score lose">0</div>
          </div>
        </section>
      </div>
      {/*className=" win" 
             className="lose"*/}
      <div className="secondpart">
        <h3 className="bracket-title">Winners</h3>
        <section className="winner cursor">
          <div className="bracket">
            <span className='win'>Stars Horizon</span>
            <div className="score">2</div>
          </div>

          <div className="bracket">
            <span className='lose'>NOORG 2.0</span>
            <div className="score lose">0</div>
          </div>
        </section>

        <h3 className="bracket-title">Decider</h3>
        <section className="cursor">
          <div className="bracket">
            <span className='lose'>NOORG 2.0</span>
            <div className="score lose">0</div>
          </div>

          <div className="bracket">
            <span className='win'>Team Vikings</span>
            <div className="score">2</div>
          </div>
        </section>
      </div>

      <div className="qualified">
        <div>
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className="win">Stars Horizon</span>
          </div>
        </div>

        <div className="qualified-bottom">
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className="win">Team Vikings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrupoA;