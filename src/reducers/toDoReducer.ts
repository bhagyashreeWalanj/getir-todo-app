import { constants } from "../actions/constants";
import { ToDosTypes, ToDoState } from "../actions/ToDosTypes";


const initialState: ToDoState = {
  tasks: [],
  message: '',
  id: '',
  error: null
};

export default (state = initialState, action: ToDosTypes) => {
  switch (action.type) {
    case constants.GET_TODOS_REQUEST:
      return {
        ...state,
      };
    case constants.GET_TODOS_SUCCESS:
      return {
        ...state,
        tasks: action.payload.tasks,
        error: null
      };
    case constants.GET_TODOS_FAILURE:
      return {
        ...state,
        tasks: [],
        error: action.payload.error
      };
      case constants.CREATE_TO_DO:
        return {
          ...state,
        };
        case constants.CREATE_TODO_SUCCESS:
          return {
            ...state, 
            tasks: action.tasks.tasks,
            error: null
          };
        case constants.CREATE_TODO_FAILURE:
          return {
            ...state,
            tasks: action.tasks.tasks,
            error: action.tasks.error
          };
      case constants.REMOVE_TODO:
        return {
          ...state 
        };
        case constants.REMOVE_TODO_SUCCESS:
          return {
            ...state, 
            tasks: action.payload.tasks,
            error: null
          };
        case constants.REMOVE_TODO_FAILURE:
          return {
            ...state,
            tasks: action.payload.tasks,
            error: action.payload.error
          };
      case constants.EDIT_TODO:
        return{
          ...state,
        }  
        case constants.EDIT_TODO_SUCCESS:
          return {
            ...state, 
            tasks: action.payload.tasks,
            error: null
          };
        case constants.EDIT_TODO_FAILURE:
          return {
            ...state,
            tasks: action.payload.tasks,
            error: action.payload.error
          };
      case constants.CLEAR_ALL_TASKS:
        return{
          ...state,
          tasks: []
        };
        
    default:
      return {
        ...state
      };
  }
};
