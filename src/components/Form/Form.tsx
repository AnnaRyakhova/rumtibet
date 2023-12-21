import { Button } from '../UiKit/Button/Button'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Form.module.css'

export const Form = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Typography variant="accentSubtitle" color="accentColor">
            актуально
          </Typography>
          <Typography variant="h2">Получайте полезные рассылки о путешествиях</Typography>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Введите e-mail адрес
            </label>
            <input type="email" id="email" placeholder="name@domain.com" />

            <Button size="normal" className={styles.button}>
              Подписаться на новости
            </Button>
          </div>
          <p className={styles.caution}>
            подписываясь на новости, вы автоматически соглашаетесь с{' '}
            <span>условиями обработки персональных данных</span> и <span>правилами рекламных рассылок</span>
          </p>
        </form>
      </div>
    </div>
  )
}
