import React from 'react'
import "./intro.css"

function Intro() {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='l-wrapper'>
          <h2 className='name'>Baptiste Bemelmans</h2>
          <h2 className='pres-moi'>20 ans belge, etudiant 3ème ephec voici mon protfolio blabla</h2>
          <h2 className='acti-title'>Acti valorisées</h2>
          <div className='acti'>
            <div className='acti-wrapper'>
              <div className='acti-item'>acti1</div>
              <div className='acti-item'>acti2</div>
              <div className='acti-item'>acti3</div>
              <div className='acti-item'>acti4</div>
              <div className='acti-item'>acti5</div>
            </div>
          </div>          
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Intro