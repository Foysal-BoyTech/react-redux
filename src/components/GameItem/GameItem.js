import React, { useContext } from 'react'
import { GameContext } from '../../App'

import coins from '../../assets/coins.png'
import controller from '../../assets/controller.png'

import '../../sass/layout.scss'
import styles from './GameItem.module.scss'

function GameItem({ game }) {
  const { checkList } = useContext(GameContext)

  if (game) {
    return (
      <div key={game.id} className={styles['game-card']}>
        <div className={styles['game-info']}>
          <img src={game.image.default} className={styles['game-img']} alt="" />
          <div className={styles['game-item']}>
            <div>
              <div className={styles['title-description']}>
                <h3>{game.title}</h3>
                <p className={styles['game-description']}>{game.description}</p>
              </div>
              <p className={styles['gil']}>
                <img src={coins} height="15px" width="15px" alt="" /> {game.gil}{' '}
                Gil
              </p>
            </div>
            <button
              className={styles['add-btn']}
              onClick={() => checkList(game)}
            >
              Add to Basket
            </button>
          </div>
        </div>
        <img src={controller} className={styles['controller-img']} alt="" />
      </div>
    )
  }
}

export default GameItem
