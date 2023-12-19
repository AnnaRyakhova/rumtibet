import styles from './Offer.module.css'
import { Button } from '../UiKit/Button/Button'
import { Advantages } from './Advantages/Advantages'
import { Typography } from '../UiKit/Typography/Typography'

export const Offer = () => {
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.root}>
          <div className={styles.textContent}>
            <div>
              <Typography variant="accentSubtitle" color="accentColor">
                наше предложение
              </Typography>
              <Typography variant="h2">Лучшие программы для тебя</Typography>
            </div>
            <Typography variant="mainText">
              Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
              Ричард МакКлинток, профессор латыни из колледжа.
            </Typography>
            <Advantages />
            <Button className={styles.button}>Стоимость программы</Button>
          </div>

          <div className={styles.images}>
            <div className={styles.imgWrapper}>
              <img src="/images/offer/photo1.png" alt="Фото озера из поездки" />
            </div>
            <div className={styles.imgWrapper}>
              <img src="/images/offer/photo2.png" alt="Фото туриста в горах" />
            </div>
            <div className={styles.imgWrapper}>
              <img src="/images/offer/photo3.png" alt="Фото туриста на снегоходе" />
            </div>
            <div className={styles.imgWrapper}>
              <img src="/images/offer/photo4.png" alt="Фото гор из поездки" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
