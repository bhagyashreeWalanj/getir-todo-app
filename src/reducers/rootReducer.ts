import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
import { ToDoState } from "../actions/ToDosTypes";

export interface IAppState {
  toDos:  ToDoState
}

const rootReducer = combineReducers({
  toDos: toDoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
