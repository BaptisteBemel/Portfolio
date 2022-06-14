import React from 'react'
import './acti.css'
import ocr from '../../img/ocr.png'
import rootme from '../../img/rootme.png'
import tutorat from '../../img/tutorat.png'
import tutorat2 from '../../img/tutorat2.png'
import cybersec from '../../img/cybsec.png'
import cybersec2 from '../../img/cybsec2.png'
import erasm from '../../img/erasmus.png'

function Acti() {
  return (
    <div className='actipage'>
        <div className='titreTab'>
            <h1 id='titretab'>Activités du Portfolio</h1>
        </div>
        <section className='tableau'>
            <table>
                <thead>
                    <th>Thème</th>
                    <th>Activité</th>
                    <th>Heures valorisées</th>
                    <th>Activités du thème</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Tutorat</td>
                        <td>Turorat math et programmation</td>
                        <td>9</td>
                        <td>
                            <a href='#tutorat'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Hackathon</td>
                        <td>Cybersecurity Challenge</td>
                        <td>10</td>
                        <td>
                            <a href='#hackathon'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Programmation web</td>
                        <td>OpenClassRooms: jQuery</td>
                        <td>7</td>
                        <td>
                            <a href='#web'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Progammation applicative</td>
                        <td>OpenClassRooms: Java</td>
                        <td>7</td>
                        <td>
                            <a href='#progra'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Service d'annuaire LDAP</td>
                        <td>OpenClassRooms: Active Directory</td>
                        <td>7</td>
                        <td>
                            <a href='#ldap'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Sécurité informatique</td>
                        <td>root-me</td>
                        <td>10</td>
                        <td>
                            <a href='#secu'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Non-technique</td>
                        <td>Erasmus</td>
                        <td>10</td>
                        <td>
                            <a href='#notech'>
                                <button>Voir</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div className='preuve'>
            <h1>Détail des différents thèmes</h1>
            <div id='tutorat'>
                <h2>Tutorat</h2>
                <p>Texte</p>
                <img src={tutorat} id="tut1" />
                <img src={tutorat2} />
            </div>
            <div id='hackathon'>
                <h2>Hackathon</h2>
                <p>Texte</p>
                <img src={cybersec} id="cyb1" />
                <img src={cybersec2} />
            </div>
            <div id='web'>
                <h2>Programmation WEB</h2>
                <p>Texte</p>
                <img src={ocr} width="60%" height="90%" />
            </div>
            <div id='progra'>
                <h2>Programmation applicative</h2>
                <p>Texte</p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='ldap'>
                <h2>Service d'annuaire LDAP</h2>
                <p>Texte</p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='secu'>
                <h2>Sécurité informatique</h2>
                <p>Texte</p>
                <img src={rootme} width="90%" />
            </div>
            <div id='notech'>
                <h2>Activités non-techniques</h2>
                <p>Texte</p>
                <img src={erasm} />
            </div>
        </div>
    </div>
  )
}

export default Acti