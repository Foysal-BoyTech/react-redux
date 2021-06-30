import items from '../../items'

const reducer = (state = items, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'fetch-games':
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer
