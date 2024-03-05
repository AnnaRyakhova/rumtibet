import Fancybox from './Fancybox'
import cn from 'classnames'

import { Icon } from '@/components/Icon/Icon'
import { Button } from '@/components/UiKit/Button/Button'
import { Typography } from '@/components/UiKit/Typography/Typography'

import styles from './Photos.module.css'
import { Container } from '../Container/Container'

export const Photos = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.title}>
        <Typography variant="accentSubtitle" color="accentColor">
          фото-отчет
        </Typography>
        <Typography variant="h2">Делимся впечатлениями</Typography>
      </div>

      <Fancybox className={styles.photos}>
        <a
          data-fancybox="gallery"
          href="/images/photos/photo_1.jpeg"
          className={cn(styles.photo, styles.wideItem)}
          style={{ backgroundImage: "url('/images/photos/photo_1.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
        <a
          data-fancybox="gallery"
          href="/images/photos/photo_2.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_2.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>
        <a
          data-fancybox="gallery"
          href="/images/photos/photo_3.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_3.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>

        <a
          data-fancybox="gallery"
          href="/images/photos/photo_4.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_4.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>
        <a
          data-fancybox="gallery"
          href="/images/photos/photo_5.jpeg"
          className={cn(styles.photo, styles.wideItem)}
          style={{ backgroundImage: "url('/images/photos/photo_5.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
        <a
          data-fancybox="gallery"
          href="/images/photos/photo_6.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_6.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
      </Fancybox>

      <Button>Наш pinterest</Button>
    </Container>
  )
}
