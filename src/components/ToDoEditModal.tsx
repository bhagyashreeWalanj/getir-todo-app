import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from '../styles/modal.module.scss'
import { RiCloseCircleFill } from 'react-icons/ri'
import Alert from './Alert'

interface IEditTaskModalProps {
  taskName: string
  isOpen: boolean
  onRequestClose: () => void
  handleEditTask: (id: string, title: string) => void
  EditTaskId: string
}

const ToDoEditModal = ({
  taskName,
  isOpen,
  onRequestClose,
  handleEditTask,
  EditTaskId,
}: IEditTaskModalProps) => {
  const [newTitle, setNewTitle] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const handleEditOnChange = (title: string) => {
    setNewTitle(title)
  }
  const editTask = (id: string, title: string) => {
    if (title !== '') {
      handleEditTask(id, title)
      showAlert(true, 'success-edit', 'Successfully changed')
      const timeout = setTimeout(() => {
        onRequestClose()
        setAlert({ show: false, msg: '', type: '' })
      }, 2000)
      return () => clearTimeout(timeout)
    } else {
      showAlert(true, 'danger-edit', 'Please add task to save')
      return
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.modalContainer}
        overlayClassName={styles.overlayContainer}
        ariaHideApp={false}
      >
        <RiCloseCircleFill
          className={styles.closeButton}
          onClick={() => {
            onRequestClose()
          }}
        />
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={[]} />}

        {!!taskName && (
          <div key={EditTaskId}>
            <div className={styles.label}>
              <h2 className={styles.header}>Edit Task</h2>
            </div>

            <div className={styles.NoteTypeContainer}>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Edit task..."
                //value={task}
                defaultValue={taskName}
                name={`input_${EditTaskId}`}
                onChange={(e) => handleEditOnChange(e.target.value)}
              />

              <button
                className={styles.ButtonSave}
                onClick={() => {
                  editTask(EditTaskId, newTitle)
                }}
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ToDoEditModal
