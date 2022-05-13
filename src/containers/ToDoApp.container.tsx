import { IAppState } from '../reducers/rootReducer'
import { connect } from 'react-redux'
import ToDoApp from '../components/ToDoApp'
import {
  getToDosRequest,
  createToDo,
  clearToDosAction,
} from '../actions/ToDosActions'
import { ITask } from '../models/ITask'

// Grab the Tasks from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  console.log('mapStateToProps', store)
  return {
    tasks: store.toDos.tasks,
    error: store.toDos.error,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTasks: () => dispatch(getToDosRequest()),
    createToDo: (task: string, tasks: ITask[]) =>
      dispatch(createToDo(task, tasks)),
    clearTasks: () => dispatch(clearToDosAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp as any)
