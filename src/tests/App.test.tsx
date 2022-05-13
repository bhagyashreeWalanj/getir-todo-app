import React from 'react'

import App from '../components/App'
import ToDoApp from '../containers/ToDoApp.container'
import { shallow } from 'enzyme'
import ToDoList from '../containers/ToDoList.container'

describe('render all components', () => {
  const app = shallow(<App />)

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot()
  })
  it('App Component contains To Do component', () => {
    expect(app.contains(<ToDoApp />)).toBe(true)
  })
  it('App Component contains ToDo Task List component', () => {
    expect(app.contains(<ToDoList />)).toBe(true)
  })
})
