import React, { useContext } from 'react'
import { GameContext } from '../../App'
import RoutingButton from '../RoutingButton/RoutingButton'
import ItemsInBasket from '../ItemsInBasket/ItemsInBasket'

import styles from './Basket.module.scss'

function Basket() {
  const { basketList, deleteItem, totalGil } = useContext(GameContext)

  return (
    <div className={styles['basket']}>
      <h1>Basket</h1>
      {basketList.length ? (
        <div className={styles['items-container']}>
          {basketList.map((game) => (
            <div key={game.id} className={styles['item-in-basket']}>
              <ItemsInBasket
                game={game}
                deleteItem={deleteItem}
                basket={true}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles['no-items-container']}>
          <p className={styles['no-item']}>No items</p>
        </div>
      )}

      {totalGil ? (
        <div className={styles['total']}>
          {' '}
          <h5>Total </h5> <p>{totalGil}</p>
        </div>
      ) : null}

      <div className={styles['continue-btn']}>
        <RoutingButton text="Continue" />
      </div>
    </div>
  )
}

export default Basket
