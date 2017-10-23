import React from 'react'
import test from 'ava'
import {shallow, mount} from 'enzyme'

import Round from '../src/components/Round'

test('should render <Round /> properly', t => {
  const config = {
    currentRound: {
      roundNumber: 1,
      player: 'Lalo',
      upRound: false,
    }
  }
  const shallowWrapper = shallow(<Round
    rounds={config}
  />)
  t.is(shallowWrapper.find('h2').text(), 'Round 1', 'Includes round 1 in the headline')
  t.is(shallowWrapper.find('h3').text(), 'Lalo', 'Includes Lalo in the name element')
})

test('should render <Round /> and Redirect', t => {
  const config = {
    currentRound: {
      roundNumber: 5,
      player: 'Lalo',
      upRound: true,
    },
    wins: {
      'Lalo': 3,
      'Lolo': 2,
    }
  }
  const shallowWrapper = shallow(<Round
    rounds={config}
    winner={()=>1}
  />)
  t.is(shallowWrapper.find('Redirect').length, 1, 'Includes Redirect if the match ends')
})

test('should calculateWinner', t => {
  const firstPlayerMove = {
    player: 'Lolo',
    selection: {
      value: 'rock',
      kills: 'scissors',
    },
  }
  const secondPlayerMove = {
    player: 'Lalo',
    selection: {
      value: 'rock',
      kills: 'scissors',
    }
  }
  const tieGame = Round.calculateWinner(firstPlayerMove, secondPlayerMove)
  t.is(tieGame, undefined)
  firstPlayerMove.selection = {
    value: 'paper',
    kills: 'rock',
  }
  const firstPlayerWin = Round.calculateWinner(firstPlayerMove, secondPlayerMove)
  t.is(firstPlayerWin, 'Lolo')
  secondPlayerMove.selection = {
    value: 'scissors',
    kills: 'paper',
  }
  const secondPlayerWin = Round.calculateWinner(firstPlayerMove, secondPlayerMove)
  t.is(secondPlayerWin, 'Lalo')
})
