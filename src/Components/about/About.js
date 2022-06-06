import React from 'react'
import './about.css'
import Doge from "../../img/Doge.png"

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card"><img src={Doge} alt='' className='a-img' /></div>
        </div>
        <div className="a-right"></div>
    </div>
  )
}

export default About