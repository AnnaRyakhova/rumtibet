import { Button } from '../UiKit/Button/Button'
import { Typography } from '../UiKit/Typography/Typography'
import styles from './Photos.module.css'
import cn from 'classnames'

export const Photos = () => {
    return (
        <div className={cn(styles.wrapper, 'container')}>
            <div className={styles.title}>
                <Typography variant="accentSubtitle" color="accentColor">
                    фото-отчет
                </Typography>
                <Typography variant="h2">Делимся впечатлениями</Typography>
            </div>

            <div className={styles.photos}>
                <div
                    className={cn(styles.photo, styles.wideItem)}
                    style={{ backgroundImage: "url('/photos/photo_1.jpeg')" }}
                />
                <div className={styles.photo} style={{ backgroundImage: "url('/photos/photo_2.jpeg')" }} />
                <div className={styles.photo} style={{ backgroundImage: "url('/photos/photo_3.jpeg')" }} />

                <div className={styles.photo} style={{ backgroundImage: "url('/photos/photo_4.jpeg')" }} />
                <div
                    className={cn(styles.photo, styles.wideItem)}
                    style={{ backgroundImage: "url('/photos/photo_5.jpeg')" }}
                />
                <div className={styles.photo} style={{ backgroundImage: "url('/photos/photo_6.jpeg')" }} />
            </div>
            <Button>Наш pinterest</Button>
        </div>
    )
}
