import React from 'react'

import flag from '../../assets/flag.png'
import telephone from '../../assets/telephone.png'

import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <div className={styles['nav-bar-container']}>
      <div className={styles.mobile}>
        <img src={telephone} height="25px" width="auto" alt="" />
        <p className={styles.contacts}> 1337 1337 1337</p>
      </div>
      <div className={styles.flag}>
        <img src={flag} height="25px" width="auto" alt="" />
        <p className={styles.contacts}> Try another Castle</p>
      </div>
    </div>
  )
}

export default NavBar
