import React from 'react'

function GroupB({ onHandleClick }) {
  return (
    <section className="groupB">
      <h2 className="group-title">Grupo B</h2>
      <div className="semi">
        <h3 className="bracket-title">Upper</h3>
        <section
          className="cursor"
          onClick={() => {
            onHandleClick()
          }}
        >
          <div className="bracket">
            <span className="win">Sharks</span>
            <div className="score">13</div>
          </div>

          <div className="bracket">
            <span className="lose">NOORG2.0</span>
            <div className="score lose">10</div>
          </div>
        </section>

        <section role='presentation' className="cursor" onClick={() => { onHandleClick() }}>
          <div className="match">
            <div className="bracket">
              <span className="win">Gamelanders Blue</span>
              <div className="score">13</div>
            </div>

            <div className="bracket">
              <span className="lose">Havan Liberty</span>
              <div className="score lose">6</div>
            </div>
          </div>
        </section>

        <h3 className="bracket-title">Bottom</h3>
        <section role='presentation' className="cursor" onClick={() => { onHandleClick() }}>
          <div className="bracket">
            <span className="lose">Havan Liberty</span>
            <div className="score lose">1</div>
          </div>

          <div className="bracket">
            <span className="win">NOORG 2.0</span>
            <div className="score">2</div>
          </div>
        </section>
      </div>

      <div className="secondpart">
        <h3 className="bracket-title">Winners</h3>
        <section role='presentation' className="cursor" onClick={() => { onHandleClick() }}>
          <div className="bracket">
            <span className="lose">Sharks Esports</span>
            <div className="score">1</div>
          </div>

          <div className="bracket">
            <span className="win">Gamelanders Blue</span>
            <div className="score">2</div>
          </div>
        </section>

        <h3 className="bracket-title match">Decider</h3>
        <section role='presentation' className="cursor" onClick={() => { onHandleClick() }}>
          <div className="bracket">
            <span className="win">Sharks Esports</span>
            <div className="score">2</div>
          </div>

          <div className="bracket">
            <span className="lose">NOORG 2.0</span>
            <div className="score lose">1</div>
          </div>
        </section>
      </div>

      <div className="qualified">
        <div>
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className="win">Gamelanders Blue</span>
          </div>
        </div>

        <div className="qualified-bottom">
          <h3 className="bracket-title">Qualified</h3>

          <div className="bracket">
            <span className="win">Sharks Esports</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupB;