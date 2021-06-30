import React, { useContext } from 'react'
import { GameContext } from '../../App'
import { useHistory } from 'react-router-dom'
import styles from './RoutingButton.module.scss'

function RoutingButton({ text }) {
  const { basketList } = useContext(GameContext)
  const history = useHistory()
  const handleButton = () => {
    if (text.toLowerCase() === 'continue') {
      history.push('/checkout')
    } else {
      history.push('/')
    }
  }
  return (
    <button
      className={
        text === 'Continue' && !basketList.length
          ? styles['routing-btn']
          : styles['back-btn']
      }
      onClick={handleButton}
    >
      {text}
    </button>
  )
}

export default RoutingButton
