import React, { useState } from 'react'
import styles from '../styles/toDoList.module.scss'
import { default as classnames } from 'classnames'
import { ITask } from '../models/ITask'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import ToDoEditModal from './ToDoEditModal'

export interface IToDoList {
  tasks: ITask[]
  removeTask: (id: string, tasks: ITask[]) => void
  editTask: (id: string, title: string, tasks: ITask[]) => void
}

export function ToDoList({ tasks, removeTask, editTask }: IToDoList) {
  const [taskList, setTaskList] = useState(tasks)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState('')
  const [name, setName] = useState('')
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false)
  }

  const todos = tasks.filter((todo) => !todo.completed)
  const completedTodos = tasks.filter((todo) => todo.completed)

  const handleRemoveTask = (id: string) => {
    removeTask(id, tasks)
  }

  const handleEditTask = (id: string, title: string) => {
    editTask(id, title, tasks)
  }

  const handleCheckBox = (id: string) => {
    tasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTaskList(tasks)
  }

  const handleEditBtn = (id: string) => {
    const specificItem = tasks.find((item) => item.id === id)
    const title = specificItem?.title
    setIsNewTaskModalOpen(true)
    setName(title!)
    setIsEditing(true)
    setEditID(id)
  }

  return (
    <div className={styles.container}>
      {!tasks ? (
        <div className={styles.noDataDiv}>No Data!</div>
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thead}>Status</th>
                <th className={styles.thead}>Title</th>
                <th className={styles.thead}>Created At</th>
                <th className={styles.thead}>Task Status</th>
                <th className={styles.thead}>Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.taskHeader}>Pending Tasks</td>
              </tr>
              {todos.length === 0 ? (
                <tr className={styles.noDataDiv}>
                  <td>No Pending Tasks!</td>
                </tr>
              ) : (
                todos.map((pendingTask, index) => (
                  <tr
                    key={index}
                    className={'taskTR_pending'}
                    id={`taskTR_pending_${pendingTask.id}`}
                  >
                    <td>
                      <input
                        className={styles.ToDo__checkbox}
                        type="checkbox"
                        id={`checkbox_${pendingTask.id}`}
                        name={`input_${pendingTask.id}`}
                        value={pendingTask.title}
                        checked={pendingTask.completed}
                        onChange={() => handleCheckBox(pendingTask.id)}
                      />
                    </td>

                    <td
                      className={classnames({
                        [styles.strike]: pendingTask.completed,
                      })}
                    >
                      {pendingTask.title}
                    </td>

                    <td
                      className={classnames({
                        [styles.strike]: pendingTask.completed,
                      })}
                    >
                      {pendingTask.createdAt}
                    </td>
                    <td
                      className={classnames({
                        [styles.strike]: pendingTask.completed,
                      })}
                    >
                      {pendingTask.completed ? 'COMPLETE' : 'PENDING'}
                    </td>

                    <td>
                      <div className={styles.options}>
                        <FiEdit
                          id={`editBtn_${pendingTask.id}`}
                          className={styles.ToDo__update}
                          onClick={() => handleEditBtn(pendingTask.id)}
                        >
                          <span className={styles.tooltiptext}>Edit</span>
                        </FiEdit>

                        <AiFillDelete
                          id={`removeBtn_${pendingTask.id}`}
                          className={styles.ToDo__delete}
                          onClick={() => handleRemoveTask(pendingTask.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}

              <tr>
                <td className={styles.taskHeader}>Completed Tasks</td>
              </tr>

              {completedTodos.length === 0 ? (
                <tr className={styles.noDataDiv}>
                  <td>-</td>
                </tr>
              ) : (
                completedTodos.map((completedTask, index) => (
                  <tr
                    key={index}
                    className={'taskTR_completed'}
                    id={`taskTR_completed_${completedTask.id}`}
                  >
                    <td>
                      <input
                        className={styles.ToDo__checkbox_completed}
                        type="checkbox"
                        id={`checkbox_${completedTask.id}`}
                        name={`input_${completedTask.id}`}
                        value={completedTask.title}
                        checked={completedTask.completed}
                        onChange={() => handleCheckBox(completedTask.id)}
                      />
                    </td>

                    <td
                      className={classnames({
                        [styles.strike]: completedTask.completed,
                      })}
                    >
                      {completedTask.title}
                    </td>

                    <td
                      className={classnames({
                        [styles.strike]: completedTask.completed,
                      })}
                    >
                      {completedTask.createdAt}
                    </td>
                    <td className={styles.taskComplete}>
                      {completedTask.completed ? 'COMPLETED' : 'PENDING'}
                    </td>
                    <td>
                      <div className={styles.options}>
                        <FiEdit
                          id={`editBtn_${completedTask.id}`}
                          className={styles.ToDo__update}
                          onClick={() => handleEditBtn(completedTask.id)}
                        ></FiEdit>

                        <AiFillDelete
                          id={`removeBtn_${completedTask.id}`}
                          className={styles.ToDo__delete}
                          onClick={() => handleRemoveTask(completedTask.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {isEditing ? (
        <ToDoEditModal
          isOpen={isNewTaskModalOpen}
          EditTaskId={editID}
          taskName={name}
          handleEditTask={handleEditTask}
          onRequestClose={handleCloseNewTaskModal}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default ToDoList
