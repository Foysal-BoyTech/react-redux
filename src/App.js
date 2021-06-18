import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index.js'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  )

  return (
    <div className="App">
      <Title>{account}</Title>
      <button onClick={() => depositMoney(10)}>Add</button>
      <button onClick={() => withdrawMoney(10)}>Subtract</button>
    </div>
  )
}

export default App
