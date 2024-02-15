import { Button } from '@/components/UiKit/Button/Button'
import { Typography } from '@/components/UiKit/Typography/Typography'
import { Link } from 'react-router-dom'
import { Container } from '@/components/Container/Container'

import styles from './Notfound.module.css'

export const Notfound = () => {
  return (
    <div className={styles.background}>
      <Container className={styles.root}>
        <div className={styles.error}>404</div>
        <Typography variant="h1" color="lightColor" className={styles.title}>
          Страница не найдена
        </Typography>
        <Link to="/">
          <Button color="light">Вернуться на главную</Button>
        </Link>
      </Container>
    </div>
  )
}
