import React from 'react'
import './acti.css'
import { Link } from 'react-router-dom'

function Acti() {
  return (
    <div className='actipage'>
        <div className='titreTab'>
            
        </div>
        <section className='tableau'>
            <table>
                <thead>
                    <th>Thème</th>
                    <th>Activité</th>
                    <th>N° heures valorisées</th>
                    <th>Activités du thème</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Tutorat</td>
                        <td>Turorat math et programmation</td>
                        <td>9</td>
                        <td>
                            <Link to='/activites/tutorat'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Hackathon</td>
                        <td>Cybersecurity Challenge</td>
                        <td>10</td>
                        <td>
                            <Link to='/activites/hackathon'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Programmation web</td>
                        <td>OpenClassRooms: jQuery</td>
                        <td>7</td>
                        <td>
                            <Link to='/activites/web'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Progammation applicative</td>
                        <td>OpenClassRooms: Java</td>
                        <td>7</td>
                        <td>
                            <Link to='/activites/progra'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Service d'annuaire LDAP</td>
                        <td>OpenClassRooms: Active Directory</td>
                        <td>7</td>
                        <td>
                            <Link to='/activites/ldap'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Sécurité informatique</td>
                        <td>root-me</td>
                        <td>10</td>
                        <td>
                            <Link to='/activites/secu'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Non-technique</td>
                        <td>Erasmus</td>
                        <td>10</td>
                        <td>
                            <Link to='/activites/notech'>
                                <button />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default Acti