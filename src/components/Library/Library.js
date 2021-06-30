import React, { useContext } from 'react'

import { GameContext } from '../../App'
import RoutingButton from '../RoutingButton/RoutingButton'
import ItemsInLibrary from '../ItemsInLibrary/ItemsInLibrary'
import logo from '../../assets/logo.png'

import styles from './Library.module.scss'

function Library() {
  const { basketList, deleteItem, totalGil } = useContext(GameContext)

  return (
    <div className={styles['library-container']}>
      <div className={styles.navimg}>
        <img src={logo} height="auto" width="200px" alt="" />
      </div>
      <div className={styles['library']}>
        <div className={styles['back-btn']}>
          <RoutingButton text="Go Back" />
        </div>
        {basketList.length ? (
          <div className={styles['items-container']}>
            {basketList.map((game) => (
              <div key={game.id}>
                <ItemsInLibrary
                  game={game}
                  deleteItem={deleteItem}
                  basket={true}
                />
              </div>
            ))}
          </div>
        ) : null}
        {totalGil ? (
          <div className={styles['total']}>
            {' '}
            <h5>Total </h5> <p>{totalGil}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Library
