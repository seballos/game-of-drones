import test from 'ava'

import rounds from '../src/reducers/rounds'

test('rounds REDUCER returns the correct state', t => {
  const prevState = {}
  const toggleAction = {
    type: 'NEXT_PLAY',
    player: 'Lolo',
    round: 1,
    upRound: false,
  }
  const randomAction = {
    type: Date.now(),
    player: 'Lalo',
    roundNumber: 2,
    upRound: true,
  }
  const nextState = {
    currentRound: {
      player: 'Lolo',
      roundNumber: 1,
      upRound: false,
    }
  }

  t.deepEqual(rounds(prevState, toggleAction), nextState,
    'The prevState has been updated')

  t.deepEqual(rounds(prevState, randomAction), prevState,
    'The prevState remains the same')
})
