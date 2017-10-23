import React from 'react'
import test from 'ava'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import InitialScreen from '../src/components/InitialScreen'


test('should render <InitialScreen /> properly', t => {
  const nextPlay = sinon.spy()
  const wrapper = mount(<InitialScreen
      nextPlay={nextPlay}
      submitPlayers={() => 1}
    />)
  t.is(wrapper.find('Textfield').length, 2, 'Two textfields for 2 players')
  wrapper.find('Button').simulate('click')
  t.is(nextPlay.calledOnce, true, 'Call next play function when the button is clicked')
})

test('should render <Redirect /> when the state changes', t => {
  const shallowWrapper = shallow(<InitialScreen />)
  shallowWrapper.setState({players: ['Lolo', 'Lalo']})
  t.is(shallowWrapper.find('Redirect').length, 1, 'should render Redirect component')
})
