import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import WinnerScreen from '../src/components/WinnerScreen'

test('should render <WinnerScreen /> properly', t => {
  const playAgain = sinon.spy()
  const value = {
    winner: 'Lalo',
  }
  const wrapper = shallow(<WinnerScreen
      playAgain={playAgain}
      rounds={value}
    />)
  t.is(wrapper.find('h2').last().text(), 'Lalo is the new EMPEROR!', 'Show the winner')
  wrapper.find('Button').simulate('click')
  t.is(playAgain.calledOnce, true, 'Call play again when the button is clecked')
})
