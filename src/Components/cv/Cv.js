import React from 'react'
import './cv.css'

function Cv() {
  return (
    <div className='total'>
      <div className='left'>
        <iframe classname='frame' src="https://drive.google.com/file/d/1Il1k43t1hbzJjbVGNcYJ85QiKeqJXgKI/preview"/>
      </div>
      <div className='right'>
        <h1>Curriculum Vitæ</h1>
        <a href="/Portfolio/pdf/CV_2022-06-12_Baptiste_Bemelmans.pdf" download="CV_Baptiste_Bemelmans_2022">
          <button>Télécharger</button>
        </a>
      </div>
    </div>
  )
}

export default Cv