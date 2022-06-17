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
        <h1 id='titretab'>Activités du Portfolio</h1>
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
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Hackathon</td>
                        <td>Cybersecurity Challenge</td>
                        <td>10</td>
                        <td>
                            <a href='#hackathon'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Programmation web</td>
                        <td>OpenClassRooms: jQuery</td>
                        <td>7</td>
                        <td>
                            <a href='#web'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Progammation applicative</td>
                        <td>OpenClassRooms: Java</td>
                        <td>7</td>
                        <td>
                            <a href='#progra'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Service d'annuaire AD</td>
                        <td>OpenClassRooms: Active Directory</td>
                        <td>7</td>
                        <td>
                            <a href='#ldap'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Sécurité informatique</td>
                        <td>root-me</td>
                        <td>10</td>
                        <td>
                            <a href='#secu'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Non-technique</td>
                        <td>Erasmus</td>
                        <td>10</td>
                        <td>
                            <a href='#notech'>
                                <button className='voir'>Voir</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div className='preuve'>
            <h1 id='detail'>Détail des différents thèmes</h1>
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
                <p>Pour pouvoir participer à un projet de développement lors de mon Erasmus, j'ai appris, via une formation OpenClassRooms, le language de programmation Java.
                    <br />Sur OpenClassRooms, j'ai aussi suivi un cours pour apprendre à programmer dans le language C.
                </p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='ldap'>
                <h2>Service d'annuaire Active Directory</h2>
                <p>J'ai réalisé une formation en ligne sur OpenClassRooms afin de comprendre le fonctionnement des service d'annuaire Active Directory de Microsoft+.</p>
                <a href="#web">Voir la preuve</a>
            </div>
            <div id='secu'>
                <h2>Sécurité informatique</h2>
                <p>Root-me est une plateforme d'apprentissage à la sécurité informatique offrant des challenges similaires à ceux des Capture the Flag. Afin de m'améliorer dans ce domaine, j'ai réalisé certains de ces challenges et ait étudié les ressources mises à disposition.
                    <br />Pour apprendre la sécurité, j'ai aussi suivi les cours suivants de la plateforme Alphorm: 1)Hacking et Sécurité: Acquérir les fondamentaux 2) Hacking et Sécurité: Maitrisez les techniiques.
                    <br />Enfin, j'ai lu le livre "Hands on Hacking" de Hickey et Arcuri que je recommande à quiconque voulant étudier la sécurité.
                </p>
                <img src={rootme} width="90%" />
            </div>
            <div id='notech'>
                <h2>Activités non-techniques</h2>
                <p>Pour le premier quadrimestre de ma 3ème année de bachelier, j'ai réalisé un Erasmus en Bavière, dans l'université Otto-Friedrich de Bamberg.
                    <br />J'ai aussi participé à des animations pour des mouvements de jeunesse, appris des langues (Allemand, Néerlandais), donné des cours de karate et plein d'autres activités enrichissantes.
                    <br />Pour conclure sur les activités non-techniques ainsi que les techniques, j'ai regardé d'innombrables vidéos dans différents domaines de l'informatique, du sport et d'autres thèmes m'intéressant. Quelles soient
                    ludiques ou non, elles permettent de rester en contact avec ces domaines et d'être au courant des nouveautés.
                </p>
                <img src={erasm} />
            </div>
        </div>
    </div>
  )
}

export default Acti