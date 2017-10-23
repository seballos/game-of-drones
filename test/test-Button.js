import React from 'react'
import test from 'ava'
import {shallow} from 'enzyme'
import sinon from 'sinon'

import Button from '../src/components/Button'

test('should render <Button /> properly', t => {
  const clickFn = sinon.spy()
  const shallowWrapper = shallow(<Button
    text="button1"
    onClick={clickFn}
  />)
  t.is(shallowWrapper.find('button').length, 1, 'Includes button element')
  shallowWrapper.find('button').simulate('click')
  t.is(clickFn.calledOnce, true)
})
