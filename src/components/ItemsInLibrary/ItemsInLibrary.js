import React from 'react'

import bin from '../../assets/bin.png'
import coins from '../../assets/coins.png'

import styles from './ItemsInLibrary.module.scss'

function ItemsInLibrary({ game, deleteItem }) {
  if (game) {
    return (
      <div key={game.id} className={styles['library-item-container']}>
        <img
          src={game.image.default}
          className={styles['library-img']}
          alt=""
        />
        <div className={styles['library-game-info']}>
          <div className={styles['title-gil']}>
            <h3>{game.title}</h3>
            <div className={styles['price']}>
              <img src={coins} height="15px" width="15px" alt="" />
              <p className={styles['gil-in-library']}>{game.gil} Gil</p>
            </div>
          </div>
          <div className={styles['bin']} onClick={() => deleteItem(game)}>
            <img
              src={bin}
              style={{ height: '40%', width: '40%' }}
              alt="delete"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default ItemsInLibrary
