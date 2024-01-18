import { useState } from 'react'
import { Button } from '../UiKit/Button/Button'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Form.module.css'
import { toast } from 'sonner'
import { useValidation } from '../../hooks'

export const Form = () => {
  const [email, setEmail] = useState('')

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const { isEmpty, emailError, minLengthError } = useValidation(email, { isEmpty: true, minLength: 7, isEmail: false })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (minLengthError && !isEmpty && !emailError) {
      toast.error(`${minLengthError}`)
    } else if (isEmpty) {
      toast.error('Заполните email')
    } else if (emailError) {
      toast.error('Введите корректный email')
    } else {
      toast.success('Теперь вы будете знать наши новости и акции!')
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Typography variant="accentSubtitle" color="accentColor">
            актуально
          </Typography>
          <Typography variant="h2">Получайте полезные рассылки о путешествиях</Typography>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Введите e-mail адрес
            </label>
            <input type="email" id="email" placeholder="name@domain.com" onChange={handleEmail} />

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
