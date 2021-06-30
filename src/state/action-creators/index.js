export const fetchGames = (games) => {
  return (dispatch) => {
    dispatch({
      type: 'fetch-games',
      payload: games,
    })
  }
}

export const basketAction = (games) => {
  return (dispatch) => {
    dispatch({
      type: 'basket-games',
      payload: games,
    })
  }
}
