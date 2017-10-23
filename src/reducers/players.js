const players = (state={}, action) => {
  if(action.type === 'SUBMIT_PLAYERS') {
    return action.players
  }
  return state
}

export default players
