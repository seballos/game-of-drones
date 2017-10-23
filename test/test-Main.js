import React from 'react'
import test from 'ava'
import {shallow} from 'enzyme'

import Main from '../src/components/Main'

test('should render <Main /> properly', t => {
  const shallowWrapper = shallow(<Main>
    <span />
  </Main>)
  t.is(shallowWrapper.find('span').length, 2, 'Includes span children and cloned element')
})
