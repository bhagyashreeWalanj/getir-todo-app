import * as React from 'react'
import { Provider } from 'react-redux'
import ToDoAppContainer from './../containers/ToDoApp.container'
import ToDoListContainer from './../containers/ToDoList.container'

import store from './../store/store'

const App: React.FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <div>
        <ToDoAppContainer />
        <ToDoListContainer />
      </div>
    </Provider>
  )
}

export default App
