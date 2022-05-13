import React from 'react'
import { shallow, mount } from 'enzyme'
import ToDoAppList from '../components/ToDoList'
import { ITask } from '../models/ITask'
import ToDoEditModal from '../components/ToDoEditModal'

describe('Testing ToDoList Component', () => {
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

  const wrapper = shallow(
    <ToDoAppList
      editTask={editTask}
      removeTask={removeTask}
      tasks={taskList}
    />,
  )

  let pendingToDos = wrapper.find('.taskTR_pending')
  let completedToDos = wrapper.find('.taskTR_completed')

  it('should display to ToDo List Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have all input elements', () => {
    expect(wrapper.find('.ToDo__checkbox').length).toBeTruthy()
    expect(wrapper.find('.ToDo__update').length).toBeTruthy()
    expect(wrapper.find('.ToDo__delete').length).toBeTruthy()
  })

  it('should render All pending tasks', () => {
    expect(pendingToDos.exists()).toBeTruthy()
    expect(pendingToDos.length).toBe(2)
  })

  it('should render all completed tasks ', () => {
    expect(completedToDos.exists()).toBeFalsy()
    expect(completedToDos.length).toBe(0)
  })

  it('should render all tasks', () => {
    const totalTasks = completedToDos.length + pendingToDos.length
    expect(totalTasks).toBe(taskList.length)
  })

  it('should confirm checkbox is checked for pending task', () => {
    const wrapperMount = mount(
      <ToDoAppList
        {...taskList}
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )
    wrapperMount
      .find('#checkbox_1')
      .simulate('change', { target: { checked: true } })
    expect(wrapperMount.find('#checkbox_1').props().checked).toBe(true)
  })

  it('Should confirm checkbox is unchecked for completed task', () => {
    taskList[0].completed = true
    const wrapperMount = mount(
      <ToDoAppList
        {...taskList}
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )
    wrapperMount
      .find('#checkbox_1')
      .simulate('change', { target: { checked: false } })
    expect(wrapperMount.find('#checkbox_1').props().checked).toBe(false)
  })

  it('should move a completed task to pending list', () => {
    taskList[0].completed = true
    const wrapperMountC = mount(
      <ToDoAppList
        {...taskList}
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )
    wrapperMountC
      .find('#checkbox_1')
      .simulate('change', { target: { checked: false } })
    let pendingList = wrapperMountC.find('.taskTR_pending')
    expect(pendingList.length).toBe(2)
  })

  it('should move a pending task to completed list', () => {
    const wrapperMountC = mount(
      <ToDoAppList
        {...taskList}
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )
    wrapperMountC
      .find('#checkbox_1')
      .simulate('change', { target: { checked: true } })
    let completeList = wrapperMountC.find('.taskTR_completed')
    expect(completeList.length).toBe(1)

    const isCompleted = wrapperMountC
      .find('#checkbox_1')
      .hasClass('ToDo__checkbox_completed')
    expect(isCompleted).toBeTruthy()
  })

  it('should click delete Task button', () => {
    const wrapperMountRM = mount(
      <ToDoAppList
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )

    wrapperMountRM
      .find('AiFillDelete#removeBtn_2')
      .simulate('click', { id: '2' })
    let pendingList = wrapperMountRM.find('.taskTR_pending')
    expect(removeTask).toBeCalledTimes(1)
    expect(pendingList.length).toBe(1)
  })

  it('should call edit modal on click edit Button', () => {
    const wrapperEdit = mount(
      <ToDoAppList
        tasks={taskList}
        editTask={editTask}
        removeTask={removeTask}
      />,
    )
    wrapperEdit.find('FiEdit#editBtn_2').simulate('click', { id: '2' })
    expect(wrapperEdit.find(ToDoEditModal)).toHaveLength(1)
  })
})
