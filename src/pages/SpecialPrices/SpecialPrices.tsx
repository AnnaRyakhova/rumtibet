import { Typography } from '../../components/UiKit/Typography/Typography'
import styles from './SpecialPrices.module.css'
import { Card } from '../../components/Directions/Directions'
import cn from 'classnames'
import { Button } from '../../components/UiKit/Button/Button'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export const SpecialPrices = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const clickHandler = () => signOut(() => navigate('/#price'))

  return (
    <div className={cn('container', styles.root)}>
      <Typography variant="h1" className={styles.title}>
        Туры со скидкой
      </Typography>
      <div className={styles.cards}>
        <Card
          background="/images/directions/lake.jpeg"
          title="Озеро возле гор"
          subtitle="романтическое приключение"
          price="400 $"
          rating="4.9"
        />
        <Card
          background="/images/directions/night.jpeg"
          title="Ночь в горах"
          subtitle="в компании друзей"
          price="450 $"
          rating="4.5"
        />

        <Card
          background="/images/directions/yoga.jpeg"
          title="Йога в горах"
          subtitle="для тех, кто забоится о себе"
          price="199 $"
          rating="5.0"
        />
      </div>
      <Button onClick={clickHandler} className={styles.button}>
        Выйти
      </Button>
    </div>
  )
}
