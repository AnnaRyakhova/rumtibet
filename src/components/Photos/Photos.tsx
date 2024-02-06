import { Icon } from '../Icon/Icon'
import { Button } from '../UiKit/Button/Button'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Photos.module.css'
import cn from 'classnames'
import Fancybox from './Fancybox'

export const Photos = () => {
  return (
    <div className={cn(styles.wrapper, 'container')}>
      <div className={styles.title}>
        <Typography variant="accentSubtitle" color="accentColor">
          фото-отчет
        </Typography>
        <Typography variant="h2">Делимся впечатлениями</Typography>
      </div>

      <Fancybox className={styles.photos}>
        <a
          data-fancybox="gallery"
          href="/photos/photo_1.jpeg"
          className={cn(styles.photo, styles.wideItem)}
          style={{ backgroundImage: "url('/images/photos/photo_1.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
        <a
          data-fancybox="gallery"
          href="/photos/photo_2.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_2.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>
        <a
          data-fancybox="gallery"
          href="/photos/photo_3.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_3.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>

        <a
          data-fancybox="gallery"
          href="/photos/photo_4.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_4.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />{' '}
        </a>
        <a
          data-fancybox="gallery"
          href="/photos/photo_5.jpeg"
          className={cn(styles.photo, styles.wideItem)}
          style={{ backgroundImage: "url('/images/photos/photo_5.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
        <a
          data-fancybox="gallery"
          href="/photos/photo_6.jpeg"
          className={styles.photo}
          style={{ backgroundImage: "url('/images/photos/photo_6.jpeg')" }}
        >
          <Icon variant="loupe" color="white" className={styles.loupe} />
        </a>
      </Fancybox>

      <Button>Наш pinterest</Button>
    </div>
  )
}
