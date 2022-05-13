import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTIONS from "../actions/ToDosActions";
import { AnyAction } from "redux";

import { constants } from "../actions/constants";
import { fetchTasks , createNewTask, deleteToDo, updateTask } from '../store/service'



function* fetchToDosSaga():any {
  try {
    const response = yield call(fetchTasks);
    const tasks = response.data;
    tasks.sort(
        ({ completed: stateA = false }, { completed: stateB = false }) =>
           Number(stateA) - Number(stateB),
    )

    yield put(ACTIONS.getToDosSuccess({
        tasks: tasks
      })
    );
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";
    if(e instanceof Error){
        yield put(
          ACTIONS.getToDosFailure({
              error: errorMessage
            })
          );
    }
    
  }
}

export function* createToDOFn (action: AnyAction): 
any{

  var todayDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("/");

  const postData ={
    //id: (Math.floor(Math.random() * 100) + 8).toString(), // generates sequence id in mockApiIo
    title: action.message,
    createdAt: todayDate,
    completed: false,
  }
  try{
   
       const savedTask = yield call(createNewTask, postData );
       const taskList = [...action.tasks, savedTask.data];

       yield put(
        ACTIONS.createToDoSuccess({
          tasks: taskList 
        })
      );    
  }catch (e){
    let errorMessage = "Failed to do something exceptional";
    if(e instanceof Error){
        yield put(
          ACTIONS.createToDoFailure({
              error: errorMessage,
              tasks: action.tasks
            })
          );
    }
  }
}

// REMOVE TODO
export function* removeToDOFn (action: AnyAction): any{
  
  try{
       yield call(deleteToDo, action.id);
      const updatedTasks = [...action.tasks].filter(task =>  task.id !== action.id);
      yield put(ACTIONS.removeToDoSuccess({ tasks: updatedTasks }));

  }catch (e){
    let errorMessage = "Failed to do something exceptional";
    if(e instanceof Error){
        yield put(
          ACTIONS.removeToDoFailure({
              error: errorMessage,
              tasks: action.tasks
            })
          );
    }
  }
}

// EDIT TODO
export function* editToDOFn (action: AnyAction): any{

  try{
        
        const changedtask = [...action.tasks].filter((task) => {
          return task.id === action.id
        });


       yield call(updateTask, changedtask[0]);

       const updatedTasks = [...action.tasks].filter((task: any) => {
        if(task.id === action.id){
          task.title = action.message
          return task;
        }
        return task;
      });

       yield put(ACTIONS.editToDoSuccess({
          tasks: updatedTasks 
        })
      );

  }catch (e){
    let errorMessage = "Failed to do something exceptional";
    if(e instanceof Error){
        yield put(ACTIONS.editToDoFailure({
              error: errorMessage,
              tasks: action.tasks
            })
          );
    }
  }
}


function* toDosSaga() {
  yield all([
    takeLatest(constants.GET_TODOS_REQUEST, fetchToDosSaga),
    takeLatest(constants.CREATE_TO_DO, createToDOFn),
    takeLatest(constants.REMOVE_TODO, removeToDOFn),
    takeLatest(constants.EDIT_TODO, editToDOFn)
  ]);
}




export default toDosSaga;
