import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/UiKit/Button/Button'
import { Typography } from '@/components/UiKit/Typography/Typography'
import { Container } from '@/components/Container/Container'

import styles from './About.module.css'

export const About = () => {
  const [isPlay, setIsPlay] = useState(false)

  return (
    <Container className={styles.root} id="program">
      <div className={styles.wrapper}>
        <div className={styles.views}>
          <div className={styles.imgWrapper}>
            <img src="/images/about/mountains.jpeg" alt="Фото гор" />
          </div>
          <div className={styles.videoWrapper}>
            {isPlay ? (
              <video src="/videos/about/views.mp4" autoPlay controls />
            ) : (
              <img src="/images/about/poster.jpg" onClick={() => setIsPlay(true)} />
            )}
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.titleWrapper}>
            <Typography variant="accentSubtitle" color="accentColor">
              о нашем походе
            </Typography>
            <Typography variant="h2">Исследуйте все горные массивы мира вместе с нами</Typography>
          </div>
          <Typography variant="mainText">
            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
            Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
            слов в Lorem Ipsum и занялся его поисками в классической латинской литературе.
          </Typography>
          <Link to="program">
            <Button className={styles.button}>Программа тура</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
