import { FC } from 'react'
import styles from './Advantages.module.css'
import { Typography } from '../../UiKit/Typography/Typography'

interface Advantage {
  imgPath: string
  alt: string
  title: string
  subtitle: string
  key: number
}

const Advantage: FC<Advantage> = ({ imgPath, alt, title, subtitle }) => {
  return (
    <div className={styles.advantage}>
      <img src={imgPath} alt={alt} />
      <div className={styles.description}>
        <h3 className={styles.advTitle}>{title}</h3>
        <Typography variant="subtitle">{subtitle}</Typography>
      </div>
    </div>
  )
}

const advantages = [
  {
    imgPath: '/images/offer/guide.png',
    alt: 'Иконка гида',
    title: 'Опытный гид',
    subtitle:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
  {
    imgPath: '/images/offer/safety.png',
    alt: 'Иконка безопасности',
    title: 'Безопасный поход',
    subtitle:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
  {
    imgPath: '/images/offer/prices.png',
    alt: 'Иконка цены',
    title: 'Лояльные цены',
    subtitle:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
]

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {advantages.map(({ imgPath, alt, title, subtitle }, index) => (
        <Advantage imgPath={imgPath} alt={alt} title={title} subtitle={subtitle} key={index} />
      ))}
    </div>
  )
}
