import React, { useContext } from 'react'
import { GameContext } from '../../App'

import bin from '../../assets/bin.png'
import coins from '../../assets/coins.png'

import styles from './ItemsInBasket.module.scss'

function ItemsInBasket({ game }) {
  const { deleteItem, basketList } = useContext(GameContext)

  const isLastElement = basketList[basketList.length - 1] === game

  if (game) {
    return (
      <div
        key={game.id}
        className={
          isLastElement ? styles['basket-item-container'] : styles['border']
        }
      >
        <img src={game.image.default} className={styles['basket-img']} alt="" />
        <div className={styles['basket-game-info']}>
          <div className={styles['title-gil']}>
            <h3>{game.title}</h3>
            <div className={styles['price']}>
              <img src={coins} height="15px" width="15px" alt="" />
              <p className={styles['gil-in-basket']}>{game.gil} Gil</p>
            </div>
          </div>
          <div onClick={() => deleteItem(game)}>
            <img
              style={{ heigth: '40%', width: '40%' }}
              src={bin}
              alt="delete"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default ItemsInBasket
