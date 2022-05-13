import { ITask } from "../models/ITask";
import { constants } from "./constants";
import * as TYPES from "./ToDosTypes";


export const getToDosRequest = (): TYPES.getToDosRequest => ({
  type: constants.GET_TODOS_REQUEST
});

export const getToDosSuccess = (
  payload: TYPES.getToDosSuccessPayload
): TYPES.getToDosSuccess => ({
  type: constants.GET_TODOS_SUCCESS,
  payload
});

export const getToDosFailure = (
    payload: TYPES.getToDosFailurePayload
): TYPES.getToDosFailure => ({
  type: constants.GET_TODOS_FAILURE,
  payload
});

// create to do 
export const createToDo =  (message: string, tasks: ITask[]) : TYPES.ICreateToDoAction => {
  
  return {
    type: constants.CREATE_TO_DO,
    message,
    tasks
  }
}
export const createToDoSuccess = (
  tasks: TYPES.createToDoSuccessPayload
): TYPES.ICreateToDoSuccess =>{
  return (
    {
    type: constants.CREATE_TODO_SUCCESS,
    tasks
  })
} ;

export const createToDoFailure = (
    tasks: TYPES.createToDoFailurePayload
): TYPES.ICreateToDoFailure => ({
  type: constants.CREATE_TODO_FAILURE,
  tasks
});

// Remove task 
export const removeTaskAction =  (id: string, tasks: ITask[]) : TYPES.IRemoveTaskAction => {
  return {
    type: constants.REMOVE_TODO,
    id,
    tasks
  }
}
export const removeToDoSuccess = (
  payload: TYPES.removeToDoSuccessPayload
): TYPES.IRemoveToDoSuccess =>{
  return (
    {
    type: constants.REMOVE_TODO_SUCCESS,
    payload
  })
} ;

export const removeToDoFailure = (
  payload: TYPES.removeToDoFailurePayload
): TYPES.IRemoveToDoFailure => ({
  type: constants.REMOVE_TODO_FAILURE,
  payload
});

// Edit Task
export const editTaskAction =  (id: string, message: string, tasks: ITask[]) : TYPES.IEditTaskAction => {
  return {
    type: constants.EDIT_TODO,
    id, 
    message, tasks
  }
}

export const editToDoSuccess = (
  payload: TYPES.editToDoSuccessPayload
): TYPES.IEditToDoSuccess =>{
  return (
    {
    type: constants.EDIT_TODO_SUCCESS,
    payload
  })
} ;

export const editToDoFailure = (
  payload: TYPES.editToDoFailurePayload
): TYPES.IEditToDoFailure => ({
  type: constants.EDIT_TODO_FAILURE,
  payload
});


// clear ALL Tasks
export const clearToDosAction =  () : TYPES.IClearTasksAction => {
  return {
    type: constants.CLEAR_ALL_TASKS,
  }
}



