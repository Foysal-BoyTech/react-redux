import React, { useContext } from 'react'
import { GameContext } from '../../App'

import GameItem from '../GameItem/GameItem'
import styles from './GameList.module.scss'

function GameList() {
  const { games } = useContext(GameContext)
  return (
    <div className={styles['game-cards']}>
      {games.length
        ? games.map((game) => <GameItem key={game.id} game={game} />)
        : null}
    </div>
  )
}

export default GameList
