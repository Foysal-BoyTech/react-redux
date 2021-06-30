import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import basketReducer from './basketReducer'

const reducers = combineReducers({
  games: gamesReducer,
  basket: basketReducer,
})

export default reducers
