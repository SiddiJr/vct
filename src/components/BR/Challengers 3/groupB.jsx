import React from 'react'

function groupB() {
  return (
    <section className="groupB">
      <h2 className="group-title">Grupo B</h2>
      <div className="semi">
        <h3 className="bracket-title">Upper</h3>
        <section className="cursor">
          <div className="bracket">
            <span className='lose'>SLICK</span>
            <div className="score lose">7</div>
          </div>

          <div className="bracket">
            <span className="win">Jaguares Esports</span>
            <div className="score">13</div>
          </div>
        </section>

        <section className="cursor">
          <div className="match">
            <div className="bracket">
              <span className='win'>Furia</span>
              <div className="score win">13</div>
            </div>

            <div className="bracket">
              <span className='lose'>Extenzy Gaming</span>
              <div className="score lose">8</div>
            </div>
          </div>
        </section>

        <h3 className="bracket-title">Bottom</h3>
        <section className="cursor">
          <div className="bracket">
            <span className='win'>SLICK</span>
            <div className="score">2</div>
          </div>

          <div className="bracket">
            <span className='lose'>Extenzy Gaming</span>
            <div className="score lose">0</div>
          </div>
        </section>
      </div>

      <div className="secondpart">
        <h3 className="bracket-title">Winners</h3>
        <section className="cursor">
          <div className="bracket">
            <span>Jaguares Esports</span>
            <div className="score">0</div>
          </div>

          <div className="bracket">
            <span>FURIA</span>
            <div className="score">0</div>
          </div>
        </section>

        <h3 className="bracket-title match">Decider</h3>
        <section className="cursor">
          <div className="bracket">
            <span>TBD</span>
            <div className="score">0</div>
          </div>

          <div className="bracket">
            <span>SLICK</span>
            <div className="score">0</div>
          </div>
        </section>
      </div>

      <div className="qualified">
        <div>
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className='win'>TBD</span>
          </div>
        </div>

        <div className="qualified-bottom">
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className='win'>TBD</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default groupB
