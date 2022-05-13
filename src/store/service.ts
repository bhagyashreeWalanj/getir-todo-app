import axios from 'axios';
import { ITask } from '../models/ITask';


export const AXIOS_URL = 'https://624b52c271e21eebbcf0b4ba.mockapi.io/tasks'

//'https://my-json-server.typicode.com/bhagyashreeWalanj/tasks/tasks'

export const fetchTasks  = () => axios.get<ITask[]>(AXIOS_URL);
export const createNewTask  = (task: any) => axios.post<ITask[]>(AXIOS_URL, task);
export const deleteToDo = (id: string) => axios.delete<ITask[]>(AXIOS_URL + `/${id}`);
export const getTaskById =(id: string) => axios.get<ITask[]>(AXIOS_URL+`/${id}`);
export const updateTask  = (task: any) => axios.put<ITask[]>(AXIOS_URL+`/${task.id}`, task);
