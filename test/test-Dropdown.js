import React from 'react'
import test from 'ava'
import {shallow} from 'enzyme'

import Dropdown from '../src/components/Dropdown'

test('should render <Dropdown /> properly', t => {
  const valueList = ['Rock', 'Paper', 'Scissors']
  const shallowWrapper = shallow(<Dropdown
    id="p1-textfield"
    name="Player 1"
    values={valueList}
  />)
  t.is(shallowWrapper.find('option').length, 3, 'Includes option element')
})
