import { FC } from 'react'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Directions.module.css'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'
import { Button } from '../UiKit/Button/Button'

interface Card {
  background: string
  title: string
  subtitle: string
  price: string
  rating: string
}

const Card: FC<Card> = ({ background, title, subtitle, price, rating }) => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.rating}>
        <Icon variant="star" color="accent" />
        <p>{rating}</p>
      </div>

      <div className={styles.cardFooter}>
        <div>
          <Typography variant="h3" color="lightColor">
            {title}
          </Typography>
          <Typography variant="subtitle" color="lightColor" className={styles.subtitle}>
            {subtitle}
          </Typography>
        </div>
        <div className={styles.price}>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export const Directions = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.text}>
        <Typography variant="accentSubtitle" color="accentColor">
          по версии отдыхающих
        </Typography>
        <Typography variant="h2">Популярные направления</Typography>
      </div>

      <div className={styles.cards}>
        <Card
          background="/images/directions/lake.jpeg"
          title="Озеро возле гор"
          subtitle="романтическое приключение"
          price="480 $"
          rating="4.9"
        />
        <Card
          background="/images/directions/night.jpeg"
          title="Ночь в горах"
          subtitle="в компании друзей"
          price="500 $"
          rating="4.5"
        />

        <Card
          background="/images/directions/yoga.jpeg"
          title="Йога в горах"
          subtitle="для тех, кто забоится о себе"
          price="230 $"
          rating="5.0"
        />
      </div>
      <Button>Рейтинг направлений</Button>
    </div>
  )
}
