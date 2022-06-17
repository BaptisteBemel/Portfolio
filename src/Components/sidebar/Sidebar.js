import React from 'react'
import './sidebar.scss'
import Logo from '../../img/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSheetPlastic, faTable } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/Portfolio/'>
            <img src={Logo} />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/Portfolio/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="cv-link" to="/Portfolio/cv">
                <FontAwesomeIcon icon={faSheetPlastic} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="tab-link" to="/Portfolio/activites">
                <FontAwesomeIcon icon={faTable} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/baptiste-bemelmans-67ba321a5/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/BaptisteBemel">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default sidebar