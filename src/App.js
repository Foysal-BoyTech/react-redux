import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index.js'

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  )

  return (
    <div className="App">
      <h3>{account}</h3>
      <button onClick={() => depositMoney(10)}>Add</button>
      <button onClick={() => withdrawMoney(10)}>Subtract</button>
    </div>
  )
}

export default App
