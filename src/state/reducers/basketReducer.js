const initialStore = []

const reducer = (state = initialStore, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'basket':
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer
