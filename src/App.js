import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Library from './components/Library/Library'
import NavBar from './components/NavBar/NavBar'

import items from './items'

import Home from './components/Home/Home'

export const GameContext = React.createContext(null)

function App() {
  const [games, setGames] = useState([])
  const [basketList, setBasketList] = useState([])
  const [totalGil, setTotalGil] = useState(0)
  const [cardOpacity, setCardOpacity] = useState({ opacity: 1 })

  useEffect(() => {
    setGames(items)
  }, [])

  const addGameToBasket = (item) => {
    setBasketList((prevState) => [...prevState, item])
  }
  const checkList = (item) => {
    const newId = []
    basketList.forEach(({ id }) => {
      newId.push(id)
    })

    if (!newId.includes(item.id)) {
      addGameToBasket(item)
      setCardOpacity({ opacity: 0 })
    }
  }

  const deleteItem = (item) => {
    const newList = basketList.filter((el) => item.id !== el.id)
    setBasketList(newList)
  }

  const gilCounter = () => {
    let gilNum = 0
    basketList.forEach((game) => {
      gilNum += game.gil
    })
    return gilNum
  }

  useEffect(() => {
    const gilNum = gilCounter()
    setTotalGil(gilNum)
  }, [basketList.length])

  return (
    <div className="xanda-react-trial">
      <NavBar />

      <GameContext.Provider
        value={{
          checkList,
          games,
          basketList,
          deleteItem,
          totalGil,
          cardOpacity,
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Library} />
        </Switch>
      </GameContext.Provider>
    </div>
  )
}

export default App
