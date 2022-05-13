import { ITask } from "../models/ITask";
import { constants } from "./constants";

export interface ToDoState {
  tasks: ITask[];
  error: string | null;
  id: string,
  message: string 
}

// Fetch All Tasks
export interface getToDosSuccessPayload {
  tasks: ITask[];
}

export interface getToDosFailurePayload {
  error: string;
}

export interface getToDosRequest {
  type: typeof constants.GET_TODOS_REQUEST;
}

export type getToDosSuccess = {
  type: typeof constants.GET_TODOS_SUCCESS;
  payload: getToDosSuccessPayload;
};

export type getToDosFailure = {
  type: typeof constants.GET_TODOS_FAILURE;
  payload: getToDosFailurePayload;
};

// create new to do 
export interface ICreateToDoAction {
  type: constants.CREATE_TO_DO,
  message: string, 
  tasks: ITask[]
}
export interface createToDoFailurePayload {
  error: string;
}


export interface createToDoSuccessPayload {
  tasks: ITask[]
}

export interface createToDoFailurePayload {
  tasks: ITask[]
  error: string;
}
export type ICreateToDoSuccess = {
  type: typeof constants.CREATE_TODO_SUCCESS;
  tasks: createToDoSuccessPayload;
};

export type ICreateToDoFailure = {
  type: typeof constants.CREATE_TODO_FAILURE;
  tasks: createToDoFailurePayload;
};

// REMOVE TASK
export interface IRemoveTaskAction {
  type: constants.REMOVE_TODO,
  id: string,
  tasks: ITask[]
}
export interface removeToDoSuccessPayload {
  tasks: ITask[]
}

export interface removeToDoFailurePayload {
  tasks: ITask[]
  error: string;
}

export type IRemoveToDoSuccess = {
  type: typeof constants.REMOVE_TODO_SUCCESS;
  payload: removeToDoSuccessPayload;
};

export type IRemoveToDoFailure = {
  type: typeof constants.REMOVE_TODO_FAILURE;
  payload: removeToDoFailurePayload;
};


// EDIT TASK
export interface IEditTaskAction {
  type: constants.EDIT_TODO,
  id: string
  message: string
  tasks: ITask[]
}
export interface editToDoSuccessPayload {
  tasks: ITask[]
}

export interface editToDoFailurePayload {
  tasks: ITask[]
  error: string;
}

export type IEditToDoSuccess = {
  type: typeof constants.EDIT_TODO_SUCCESS;
  payload: editToDoSuccessPayload;
};

export type IEditToDoFailure = {
  type: typeof constants.EDIT_TODO_FAILURE;
  payload: editToDoFailurePayload;
};

// Clear ALL TASKS
export interface IClearTasksAction{
  type: constants.CLEAR_ALL_TASKS
}

export type ToDosTypes =
  | getToDosRequest
  | getToDosSuccess
  | getToDosFailure | ICreateToDoAction
  |ICreateToDoSuccess |  ICreateToDoFailure 
  |IRemoveTaskAction | IRemoveToDoSuccess | IRemoveToDoFailure 
  |  IEditTaskAction | IEditToDoSuccess |  IEditToDoFailure | IClearTasksAction;
