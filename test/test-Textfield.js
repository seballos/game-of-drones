import React from 'react'
import test from 'ava'
import {shallow} from 'enzyme'

import Textfield from '../src/components/Textfield'


test('should render <Textfield /> properly', t => {
  const shallowWrapper = shallow(<Textfield
    id="p1-textfield"
    name="Player 1"
  />)
  t.is(shallowWrapper.find('label').length, 1, 'Includes label element')
})
