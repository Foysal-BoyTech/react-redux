import React from 'react'

import Basket from '../Basket/Basket'
import GameList from '../GameList/GameList'
import styles from './Home.module.scss'
import logo from '../../assets/logo.png'

function Home() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.navimg}>
        <img src={logo} height="auto" width="200px" alt="" />
      </div>
      <GameList />
      <Basket />
    </div>
  )
}

export default Home
