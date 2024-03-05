import { FC } from 'react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

import { Typography } from '@/components/UiKit/Typography/Typography'
import { Button } from '@/components/UiKit/Button/Button'
import { MOCK_ARTICLES } from '@/pages/Article/constants'
import { Container } from '@/components/Container/Container'

import styles from './Blog.module.css'

interface Card {
  imgPath: string
  title: string
  subtitle: string
  date: string
  url: string
}

const Card: FC<Card> = ({ imgPath, title, subtitle, date, url }) => {
  return (
    <Link to={url} className={styles.url}>
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
            <Typography variant="subtitle" className={styles.url}>
              читать статью
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const Blog = () => {
  const handleClick = () => toast.info('Новых постов пока нет 😔')

  return (
    <div className={styles.root} id="blog">
      <Container className={styles.wrapper}>
        <div className={styles.title}>
          <Typography variant="accentSubtitle" color="accentColor">
            делимся впечатлениями
          </Typography>
          <Typography variant="h2">Блог о путешествиях</Typography>
        </div>

        <div className={styles.cards}>
          {MOCK_ARTICLES.map(({ imgPath, title, subtitle, date, id }) => {
            return (
              <Card imgPath={imgPath} title={title} subtitle={subtitle} date={date} url={`article/:${id}`} key={id} />
            )
          })}
        </div>

        <Button onClick={handleClick}>Другие материалы</Button>
      </Container>
    </div>
  )
}
