import React from 'react'
import styles from './Footer.module.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
    <footer className={styles.footer_container}>



    <h2>KNOW-I</h2>
    <p>Know deeply, innovate intelligently.</p>
    <div className={styles.social_icons}>
      <a href='#'><FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/></a>
      <a href='#'><FontAwesomeIcon icon={faInstagram} className={styles.instagram}/></a>
      <a href='#'><FontAwesomeIcon icon={faYoutube}className={styles.youtube}/></a>

    </div>
    
    <p>&copy; 2023 KNOW-I. All rights reserved.</p>
    </footer>
  )
}
