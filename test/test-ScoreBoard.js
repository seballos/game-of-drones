import React from 'react'
import test from 'ava'
import {shallow} from 'enzyme'

import ScoreBoard from '../src/components/ScoreBoard'

test('should render <ScoreBoard /> properly', t => {
  const values = [{
    round: 1,
    player: 'Lolo',
  }, {
    round: 2,
    player: 'Lalo',
  }]
  const shallowWrapper = shallow(<ScoreBoard
    values={values}
  />)
  t.is(shallowWrapper.find('tbody').find('tr').length, 2, 'Includes two rows')
})

test('should render <ScoreBoard /> wihtout values', t => {
  const values = undefined
  const shallowWrapper = shallow(<ScoreBoard
    values={values}
  />)
  t.is(shallowWrapper.find('table').length, 0, 'No table rendered')
})
