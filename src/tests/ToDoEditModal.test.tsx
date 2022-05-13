import React from 'react'
import { shallow, mount } from 'enzyme'
import ToDoAppList from '../components/ToDoList'
import { ITask } from '../models/ITask'
import ToDoEditModal from '../components/ToDoEditModal'
import Alert from '../components/Alert'

describe('Testing ToDo Edit Modal Component', () => {
  const editTask = jest.fn()
  const removeTask = jest.fn()
  const taskList: ITask[] = [
    {
      id: '1',
      title: 'Hello World 1',
      createdAt: '01/05/2022',
      completed: false,
    },
    {
      id: '2',
      title: 'Hello World 2',
      createdAt: '01/05/2022',
      completed: false,
    },
  ]

  const wrapperEdit = mount(
    <ToDoAppList
      tasks={taskList}
      editTask={editTask}
      removeTask={removeTask}
    />,
  )
  wrapperEdit.find('FiEdit#editBtn_2').simulate('click', {
    id: '2',
  })

  const handleEditTask = jest.fn()
  const onRequestClose = jest.fn()
  const modalWrapper = mount(
    <ToDoEditModal
      isOpen={true}
      EditTaskId={'2'}
      taskName={taskList[1].title}
      handleEditTask={handleEditTask}
      onRequestClose={onRequestClose}
    />,
  )

  it('should display to Edit task Modal Component', () => {
    expect(modalWrapper).toMatchSnapshot()
  })

  it('should call edit modal on click edit Button', () => {
    expect(wrapperEdit.find(ToDoEditModal)).toHaveLength(1)
  })

  it('should display selected Task title on Edit Modal Input', () => {
    expect(modalWrapper.find('.inputText').props().defaultValue).toBe(
      'Hello World 2',
    )
  })

  it('should show error if input is empty', () => {
    modalWrapper
      .find('.inputText')
      .simulate('change', { target: { value: '' } })
    modalWrapper.find('.ButtonSave').simulate('click')

    expect(modalWrapper.find(Alert)).toHaveLength(1)
    expect(modalWrapper.find(Alert).find('#alertDiv').text()).toContain(
      'Please add task to save',
    )
  })

  it('should modal close after successful edit action', () => {
    modalWrapper
      .find('.inputText')
      .simulate('change', { target: { value: 'Play Basketball' } })
    modalWrapper.find('.ButtonSave').simulate('click')

    expect(modalWrapper.find(Alert).props().msg).toBe('Successfully changed')
    setTimeout(() => {
      expect(onRequestClose).toBeCalledTimes(1)
    }, 3000)
  })
})
