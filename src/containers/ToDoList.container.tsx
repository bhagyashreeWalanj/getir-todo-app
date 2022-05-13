import { IAppState } from '../reducers/rootReducer'
import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'
import { removeTaskAction, editTaskAction } from '../actions/ToDosActions'
import { ITask } from '../models/ITask'

// Grab the tasks from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    tasks: store.toDos.tasks,
    error: store.toDos.error,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    editTask: (id: string, title: string, tasks: ITask[]) =>
      dispatch(editTaskAction(id, title, tasks)),
    removeTask: (id: string, taskList: ITask[]) =>
      dispatch(removeTaskAction(id, taskList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList as any)
