import { Typography } from '../../components/UiKit/Typography/Typography'
import { useParams, Navigate } from 'react-router-dom'
import { MOCK_ARTICLES } from './constants'
import cn from 'classnames'
import styles from './Article.module.css'

export const Article = () => {
  window.scrollTo(0, 0)
  const params = useParams()
  const id = params.id?.slice(1)

  const article = MOCK_ARTICLES.find((article) => article.id === id)

  if (!article) {
    return <Navigate to="/#blog" replace />
  }

  const paragraphs = article.text.split('\n')

  return (
    <div className={cn(styles.root, 'container')}>
      <img src={article.imgPath} className={styles.image} />
      <Typography variant="h2" className={styles.title}>
        {article.title}
      </Typography>
      {paragraphs.map((paragraph, index) => (
        <Typography variant="mainText" key={index}>
          {paragraph}
        </Typography>
      ))}
    </div>
  )
}
