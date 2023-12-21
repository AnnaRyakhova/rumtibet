import styles from './FirstScreen.module.css'
import { Typography } from '../UiKit/Typography/Typography'
import { Button } from '../UiKit/Button/Button'
import { Select } from './Select/Select'
import selects from './constants'
import cn from 'classnames'

export const FirstScreen = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.content}>
          <Typography variant="h1" color="lightColor" className={styles.title}>
            Насладись прогулкой в горах с командой единомышленников
          </Typography>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              {selects.map(({ label, labelFor, options }, index) => (
                <Select label={label} labelFor={labelFor} options={options} key={index} />
              ))}
              <Button color="light" className={styles.button}>
                Найти программу
              </Button>
            </form>
          </div>
          <Button color="light" className={styles.mobButton}>
            Найти программу
          </Button>
        </div>
      </div>
    </div>
  )
}
