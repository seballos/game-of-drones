import test from 'ava'

import players from '../src/reducers/players'

test('players REDUCER returns the correct state', t => {
  const prevState = []
  const toggleAction = {
    type: 'SUBMIT_PLAYERS',
    players: ['Lolo', 'Lalo'],
  }
  const randomAction = {
    type: Date.now(),
    players: ['Lilo', 'Lato'],
  }
  const nextState = ['Lolo', 'Lalo']

  t.deepEqual(players(prevState, toggleAction), nextState,
    'The prevState has been updated')

  t.deepEqual(players(prevState, randomAction), prevState,
    'The prevState remains the same')
})
