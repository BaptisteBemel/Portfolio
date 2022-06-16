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
                        <td>Service d'annuaire AD</td>
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
                <p>Lors de ma deuxième et troisième année à l'EPHEC, j'ai été tuteur de trois élèves en informatique et en programmation.</p>
                <img src={tutorat} id="tut1" />
                <img src={tutorat2} />
            </div>
            <div id='hackathon'>
                <h2>Hackathon</h2>
                <p>Avec trois autres élèves de l'EPHEC, nous avons participés au hackathon "Cybersecurity Challenge" en 2021 et avons fini à la 74ème position, en première position parmis les équipes de l'EPHEC.</p>
                <img src={cybersec} id="cyb1" />
                <img src={cybersec2} />
            </div>
            <div id='web'>
                <h2>Programmation WEB</h2>
                <p>J'ai réalisé une formation en ligne sur OpenClassRooms lors de ma première année à l'EPHEC afin d'apprendre le jQuery.</p>
                <img src={ocr} width="60%" height="90%" />
            </div>
            <div id='progra'>
                <h2>Programmation applicative</h2>
                <p>Pour pouvoir participer à un projet de développement lors de mon Erasmus, j'ai appris, via une formation OpenClassRooms, le language de programmation Java.</p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='ldap'>
                <h2>Service d'annuaire Active Directory</h2>
                <p>J'ai réalisé une formation en ligne sur OpenClassRooms afin de comprendre le fonctionnement des service d'annuaire Active Directory de Microsoft+.</p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='secu'>
                <h2>Sécurité informatique</h2>
                <p>Root-me est une plateforme d'apprentissage à la sécurité informatique offrant des challenges similaires à ceux des Capture the Flag. Afin de m'améliorer dans ce domaine, j'ai réalisé certains de ces challenges et ait étudié les ressources mises à disposition.</p>
                <img src={rootme} width="90%" />
            </div>
            <div id='notech'>
                <h2>Activités non-techniques</h2>
                <p>Pour le premier quadrimestre de ma 3ème année de bachelier, j'ai réalisé un Erasmus en Bavière, dans l'université Otto-Friedrich de Bamberg.</p>
                <img src={erasm} />
            </div>
        </div>
    </div>
  )
}

export default Acti