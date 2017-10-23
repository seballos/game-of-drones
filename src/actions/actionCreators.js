export const submitPlayers = players => {
  return {
    type: 'SUBMIT_PLAYERS',
    players,
  }
}

export const nextPlay = (player, round, upRound) => {
  return {
    type: 'NEXT_PLAY',
    player,
    round,
    upRound,
  }
}

export const playerMove = (player, selection, round) => {
  return {
    type: 'PLAYER_MOVE',
    player,
    selection,
    round,
  }
}

export const winnerRound = (round, player) => {
  return {
    type: 'WINNER_ROUND',
    player,
    round,
  }
}

export const winner = player => {
  return {
    type: 'WINNER',
    player,
  }
}

export const playAgain = () => {
  return {
    type: 'PLAY_AGAIN',
  }
}
