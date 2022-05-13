import React, { useEffect } from 'react'
import styles from '../styles/alert.module.scss'
import { default as classnames } from 'classnames'
import { CgDanger } from 'react-icons/cg'
import { TiTick } from 'react-icons/ti'

export interface IToDoAlert {
  type: string
  msg: string
  removeAlert: () => void
}

const Alert = ({ type, msg, removeAlert }: IToDoAlert) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  })

  return (
    <div
      className={classnames(
        type === 'success-edit'
          ? [styles.editSuccessAlert]
          : type === 'danger-edit'
          ? [styles.editErrorAlert]
          : [styles.alert],
      )}
    >
      <p
        className={classnames({
          [styles.errormsg]: type === 'danger',
          [styles.successmsg]: type === 'success',
          [styles.errormsgEdit]: type === 'danger-edit',
          [styles.successmsgEdit]: type === 'success-edit',
        })}
        id={`alertDiv`}
      >
        {type === 'danger' ? (
          <CgDanger className={styles.dangerIcon} />
        ) : (
          <TiTick />
        )}{' '}
        {msg}
      </p>
    </div>
  )
}

export default Alert
