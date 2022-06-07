import React from 'react'
import "./intro.css"
import Doge from "../../img/Doge.png"

function Intro() {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='l-wrapper'>
          <h2 className='name'>Baptiste Bemelmans</h2>
          <h2 className='acti-title'>Acti valorisées</h2>
          <div className='acti'>
            <div className='acti-wrapper'>
              <div className='acti-item'>Cours en ligne</div>
              <div className='acti-item'>Cours en ligne</div>
              <div className='acti-item'>Cours en ligne</div>
              <div className='acti-item'>Tutorat</div>
              <div className='acti-item'>Cybersecurity challenge</div>
              <div className='acti-item'>Root-me</div>
              <div className='acti-item'>Activités non-techniques</div>
            </div>
          </div>  
          <p className='pres-moi'>
            20 ans belge, etudiant 3ème ephec voici mon protfolio blabla
          </p>        
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="grey"
          className="scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className='right'>
        <div className='r-bg'></div>
        <img src={Doge} alt='' className='image' />
      </div>
    </div>
  )
}

export default Intro