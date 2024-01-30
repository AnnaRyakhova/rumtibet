import styles from './ModalForm.module.css'
import { Form } from '../Form/Form'
import cn from 'classnames'
import { FC } from 'react'

interface ModalForm {
  active: boolean
  setActive: (arg: boolean) => void
}

export const ModalForm: FC<ModalForm> = ({ active, setActive }) => {
  return (
    <div className={cn(styles.modal, active ? [styles.active] : [styles.notActive])} onClick={() => setActive(false)}>
      <Form onClick={(e) => e.stopPropagation()} type="modalForm" />
    </div>
  )
}
