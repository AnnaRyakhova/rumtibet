import { Typography } from '../UiKit/Typography/Typography'
import { useLocation } from 'react-router-dom'
import { BackendArticle, MOCK_ARTICLES } from './constants'
import cn from 'classnames'
import styles from './Article.module.css'

export const Article = () => {
  const { pathname } = useLocation()
  const id = pathname.split(':')[1]
  const { title, text, imgPath } = MOCK_ARTICLES.find((article) => article.id === id) as BackendArticle

  const paragraphs = text.split('\n')

  return (
    <div className={cn(styles.root, 'container')}>
      <img src={imgPath} className={styles.image} />
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
      {paragraphs.map((paragraph, index) => (
        <Typography variant="mainText" key={index}>
          {paragraph}
        </Typography>
      ))}
    </div>
  )
}
