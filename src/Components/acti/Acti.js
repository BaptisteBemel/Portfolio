import React from 'react'
import './acti.css'

function Acti() {
  return (
    <div>
        <div className='titreTab'>

        </div>
        <section className='tableau'>
            <table>
                <thead>
                    <th>Thème</th>
                    <th>Activité</th>
                    <th>N° heures valorisées</th>
                    <th>Preuve</th>
                    <th>Activités du thème</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Tutorat</td>
                        <td>Turorat math et programmation</td>
                        <td>9</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hackathon</td>
                        <td>Cybersecurity Challenge</td>
                        <td>10</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Programmation web</td>
                        <td>OpenClassRooms: jQuery</td>
                        <td>7</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Progammation applicative</td>
                        <td>OpenClassRooms: Java</td>
                        <td>7</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Service d'annuaire LDAP</td>
                        <td>OpenClassRooms: Active Directory</td>
                        <td>7</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sécurité informatique</td>
                        <td>root-me</td>
                        <td>10</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Non-technique</td>
                        <td>Erasmus</td>
                        <td>10</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default Acti