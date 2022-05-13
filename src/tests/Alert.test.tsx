import React from 'react'
import { shallow, mount } from 'enzyme'
import Alert from '../components/Alert'

describe('Testing Alert component', () => {
  const removeAlert = () => jest.fn()
  const msg = 'SUCCESS : DONE'
  const type = 'success'

  const wrapper = shallow(
    <Alert type={type} msg={msg} removeAlert={removeAlert} list={[]} />,
  )

  it('should display to Alert Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should check success class exists', () => {
    expect(wrapper.find('.successmsg')).toHaveLength(1)
  })

  it('should display message on div element', () => {
    expect(wrapper.find('.successmsg').text()).toContain('SUCCESS : DONE')
  })

  it('should check success class for edit exists', () => {
    const wrapperError = mount(
      <Alert
        type={'success-edit'}
        msg={'SUCCESS : DONE'}
        removeAlert={removeAlert}
        list={[]}
      />,
    )

    expect(wrapperError.find('.successmsgEdit')).toHaveLength(1)
    expect(wrapperError.find('.successmsgEdit').text()).toContain('SUCCESS')
  })

  it('should check error class exists', () => {
    const wrapperError = mount(
      <Alert
        type={'danger'}
        msg={'ERROR : EXCEPTION'}
        removeAlert={removeAlert}
        list={[]}
      />,
    )

    expect(wrapperError.find('.errormsg')).toHaveLength(1)
    expect(wrapperError.find('.errormsg').text()).toContain('ERROR')
  })

  it('should check error class for edit exists', () => {
    const wrapperError = mount(
      <Alert
        type={'danger-edit'}
        msg={'ERROR : EXCEPTION'}
        removeAlert={removeAlert}
        list={[]}
      />,
    )

    expect(wrapperError.find('.errormsgEdit')).toHaveLength(1)
    expect(wrapperError.find('.errormsgEdit').text()).toContain('ERROR')
  })

  it('should call remove alert Div after 3 seconds of timeout', () => {
    expect(wrapper.find('.successmsg')).toHaveLength(1)
    setTimeout(() => {
      expect(removeAlert).toBeCalledTimes(1)
    }, 3000)
  })
})
