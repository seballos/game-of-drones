const movements = (state=[], action) => {
  return [
      ...state, {
      player: action.player,
      selection: action.selection,
      round: action.round,
    }
  ]
}

const roundWinners = (state=[], action) => {
  return [
    ...state, {
      player: action.player || 'TIE',
      round: action.round,
    }
  ]
}

const increaseWin = (state={}, action) => {
  if (action.player) {

    return {
      ...state,
      [action.player]: state[action.player] ? state[action.player] + 1: 1
    }
  }
  return state
}

const rounds = (state={}, action) => {
  if(action.type === 'NEXT_PLAY') {
    return {
      ...state,
      currentRound: {
        player: action.player,
        roundNumber: action.round,
        upRound: action.upRound,
      }
    }
  }
  if (action.type === 'PLAYER_MOVE') {
    return {
      ...state,
      currentMove: {
        player: action.player,
        selection: action.selection,
      },
      moves: movements(state.moves, action)
    }
  }
  if (action.type === 'WINNER_ROUND') {
    return {
      ...state,
      wins: increaseWin(state.wins, action),
      winners: roundWinners(state.winners, action),
    }
  }
  if (action.type === 'WINNER') {
    return {
      ...state,
      winner: action.player
    }
  }
  if (action.type === 'PLAY_AGAIN') {
    state = {}
  }
  return state
}

export default rounds
