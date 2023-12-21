import { FC } from 'react'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Blog.module.css'
import cn from 'classnames'
import { Button } from '../UiKit/Button/Button'

interface Card {
  imgPath: string
  title: string
  subtitle: string
  date: string
  url: string
}

const Card: FC<Card> = ({ imgPath, title, subtitle, date, url }) => {
  return (
    <a href={url} className={styles.url}>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <img src={imgPath} />
        </div>

        <div className={styles.textContent}>
          <div className={styles.description}>
            <Typography variant="h3" className={styles.cardTitle}>
              {title}
            </Typography>
            <Typography variant="subtitle" className={styles.subtitle}>
              {subtitle}
            </Typography>
          </div>

          <div className={styles.cardFooter}>
            <Typography variant="subtitle" className={styles.date}>
              {date}
            </Typography>
            <a href={url} className={styles.url}>
              читать статью
            </a>
          </div>
        </div>
      </div>
    </a>
  )
}

export const Blog = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.title}>
          <Typography variant="accentSubtitle" color="accentColor">
            делимся впечатлениями
          </Typography>
          <Typography variant="h2">Блог о путешествиях</Typography>
        </div>

        <div className={styles.cards}>
          <Card
            imgPath="/images/blog/blog_1.jpeg"
            title="Красивая Италия, какая она в реальности?"
            subtitle="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
            date="01/04/2023"
            url='"#"'
          />
          <Card
            imgPath="/images/blog/blog_2.jpeg"
            title="Долой сомнения! Весь мир открыт для вас!"
            subtitle="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
            date="10/04/2023"
            url='"#"'
          />
          <Card
            imgPath="/images/blog/blog_3.jpeg"
            title="Как подготовиться к путешествию в одиночку?"
            subtitle="Для современного мира базовый вектор развития предполагает."
            date="12/04/2023"
            url='"#"'
          />
          <Card
            imgPath="/images/blog/blog_4.jpeg"
            title="Индия ... летим?"
            subtitle="Для современного мира базовый."
            date="15/04/2023"
            url='"#"'
          />
        </div>

        <Button>Другие материалы</Button>
      </div>
    </div>
  )
}
