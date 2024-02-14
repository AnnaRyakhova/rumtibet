import { Typography } from '../../components/UiKit/Typography/Typography'
import styles from './Login.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { useAuth } from '../../hooks'
import { Button } from '../../components/UiKit/Button/Button'
import { useState } from 'react'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()

  const [user, setUser] = useState('')

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    signIn(user, () => navigate(fromPage, { replace: true }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  return (
    <div className={cn('container', styles.root)}>
      <Typography variant="h2" className={styles.title}>
        Введите данные, чтобы увидеть спец цены
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Ваше имя:<input name="username" onChange={handleChange}></input>
        </label>
        <Button size="normal">Войти</Button>
      </form>
    </div>
  )
}
