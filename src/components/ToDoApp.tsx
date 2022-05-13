import React, { useState, useEffect } from 'react'
import styles from '../styles/toDoApp.module.scss'
import Alert from './Alert'
import { ITask } from '../models/ITask'

export interface AddToDoProps {
  tasks: ITask[]
  createToDo(title: string, tasks: ITask[]): void
  fetchTasks(): void
  clearTasks(): void
  error: string
}

const ToDoApp = ({
  tasks,
  createToDo,
  fetchTasks,
  clearTasks,
  error,
}: AddToDoProps) => {
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [title, setTitle] = useState('')

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  // Method to add new task
  const handleCreateToDo = (title: string) => {
    if (title !== '') {
      createToDo(title, tasks)
      if (error !== null) {
        showAlert(true, 'danger', error)
        return
      } else {
        showAlert(true, 'success', 'item added to the list')
        setTitle('')
      }
    } else {
      showAlert(true, 'danger', 'Please add task to save')
      return
    }
  }

  // Method to empty task list
  const handleClearAllTasks = () => {
    clearTasks()
    showAlert(true, 'success', 'List Empty SuccessFully !!')
  }

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div>
      <div className={styles.container}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className={styles.content}>
          <header className={styles.header}>TO DO LIST</header>
          <div className={styles.inputDivContainer}>
            <input
              className={styles.inputContainer}
              placeholder="Title"
              value={title}
              id={'addToDoInput'}
              onChange={(event) => setTitle(event.target.value)}
            />

            <button
              id={'addButton'}
              type="submit"
              onClick={() => handleCreateToDo(title)}
              className={styles.addButton}
            >
              TO DO
            </button>
            <button
              type="submit"
              onClick={() => handleClearAllTasks()}
              className={styles.clearAllButton}
            >
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoApp
