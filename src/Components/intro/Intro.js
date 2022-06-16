import React from 'react'
import "./intro.css"
import Tete from "../../img/tete.jpg"

function Intro() {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='l-wrapper'>
          <h2 className='name'>Baptiste Bemelmans</h2>
          <p className='pres-moi'>
          Bienvenue sur mon Portfolio.
          <br />
          Ce projet a été mis en place dans le cadre de mon bachelier en technologie de l'informatique à l'EPHEC.
          <br />
          Je suis un étudiant belge de 20 ans 3ème de bachelier. 
          <br />
          Vous pouvez y retrouver mon CV ainsi que les activités que j'ai réalisé en parallèle à mon bachelier ces trois dernières années.
          </p>
          <h2 className='acti-title'>Thèmes valorisées</h2>
          <div className='acti'>
            <div className='acti-wrapper'>
              <div className='acti-item'>Service d'annuaire AD</div>
              <div className='acti-item'>Programmation web</div>
              <div className='acti-item'>Progammation applicative</div>
              <div className='acti-item'>Tutorat</div>
              <div className='acti-item'>Hackathon</div>
              <div className='acti-item'>Sécurité informatique</div>
              <div className='acti-item'>Activités non-techniques</div>
            </div>
          </div>          
        </div>
      </div>
      <div className='right'>
        <div className='r-bg'></div>
        <img src={Tete} alt='' className='image' />
      </div>
    </div>
  )
}

export default Intro