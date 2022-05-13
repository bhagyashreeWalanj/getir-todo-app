import React from 'react'
import { shallow } from 'enzyme'
import ToDoApp from '../components/ToDoApp'
import Alert from '../components/Alert'
import { ITask } from '../models/ITask'

describe('Testing ToDoApp Component', () => {
  const createToDoFn = jest.fn()
  const fetchTasksFn = jest.fn()
  const clearTasks = jest.fn()

  const taskList: ITask[] = [
    {
      id: '1',
      title: 'Hello World 1',
      createdAt: '01/05/2022',
      completed: true,
    },
    {
      id: '2',
      title: 'Hello World 2',
      createdAt: '01/05/2022',
      completed: false,
    },
  ]

  const wrapper = shallow(
    <ToDoApp
      tasks={taskList}
      error={''}
      createToDo={createToDoFn}
      fetchTasks={fetchTasksFn}
      clearTasks={clearTasks}
    />,
  )

  const container = wrapper.find('.inputContainer')

  it('should display to Add ToDo task Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should add new Task without Error', () => {
    container.simulate('change', { target: { value: 'sam' } })
    wrapper.find('.addButton').simulate('click')
    expect(createToDoFn).toBeCalledTimes(1)
  })

  it('Should clear the input', () => {
    const inputValue = container.props().value
    container.simulate('change', { target: { value: 'sam' } })
    wrapper.find('.addButton').simulate('click')
    expect(inputValue).toBe('')
  })

  it('should not call click buttton when value is null', () => {
    container.simulate('change', { target: { value: '' } })
    wrapper.find('.addButton').simulate('click')
    expect(createToDoFn).toBeCalledTimes(0)
  })

  it('should display error on empty field button click', () => {
    container.simulate('change', { target: { value: '' } })
    wrapper.find('.addButton').simulate('click')

    expect(wrapper.find(Alert)).toHaveLength(1)
    // display error
    expect(wrapper.find(Alert).dive().find('#alertDiv').text()).toContain(
      'Please add task to save',
    )
  })

  it('should clear All Tasks from the list', () => {
    wrapper.find('.clearAllButton').simulate('click')
    expect(clearTasks).toBeCalledTimes(1)
    expect(wrapper.find(Alert).dive().find('#alertDiv').text()).toContain(
      'SuccessFully',
    )
  })
})
