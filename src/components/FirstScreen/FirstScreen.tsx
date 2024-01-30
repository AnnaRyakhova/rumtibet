import styles from './FirstScreen.module.css'
import { Typography } from '../UiKit/Typography/Typography'
import { Button } from '../UiKit/Button/Button'
import cn from 'classnames'
import 'react-datepicker/dist/react-datepicker.css'
import { Form } from './Form/Form'
import { useState } from 'react'

export const FirstScreen = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.content}>
          <Typography variant="h1" color="lightColor" className={styles.title}>
            Насладись прогулкой в горах с командой единомышленников
          </Typography>

          <Form type="form" />

          <Button color="light" className={styles.mobButton} onClick={() => setModalActive(true)}>
            Найти программу
          </Button>

          <div
            className={cn(styles.modal, modalActive ? [styles.active] : [styles.notActive])}
            onClick={() => setModalActive(false)}
          >
            <Form type="modalForm" />
          </div>
        </div>
      </div>
    </div>
  )
}
