import { FC } from 'react';
import styles from './Offer.module.css';
import photo1 from '/images/offer/photo1.png';
import photo2 from '/images/offer/photo2.png';
import photo3 from '/images/offer/photo3.png';
import photo4 from '/images/offer/photo4.png';
import { Button } from '../UiKit/Button';
interface Advantage {
    imgPath: string;
    alt: string;
    title: string;
    subtitle: string;
    key: number;
}

const Advantage: FC<Advantage> = ({ imgPath, alt, title, subtitle }) => {
    return (
        <div className={styles.advantage}>
            <img src={imgPath} alt={alt} />
            <div className={styles.description}>
                <h3 className={styles.advTitle}>{title}</h3>
                <p className={styles.advSubtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

const advantages = [
    {
        imgPath: '/images/offer/guide.png',
        alt: 'Иконка гида',
        title: 'Опытный гид',
        subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
        imgPath: '/images/offer/safety.png',
        alt: 'Иконка безопасности',
        title: 'Безопасный поход',
        subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
        imgPath: '/images/offer/prices.png',
        alt: 'Иконка цены',
        title: 'Лояльные цены',
        subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
]

export const Offer = () => {
    return (
        <div className={styles.background}>
            <div className="container">
                <div className={styles.root}>
                    <div className={styles.textAndButton}>
                        <div className={styles.textContent}>
                            <div>
                                <p className={styles.accentText}>наше предложение</p>
                                <h2 className={styles.title}>Лучшие программы для тебя</h2>
                            </div>
                            <p className={styles.subtitle}>
                                Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
                            </p>

                            <div className={styles.advantages}>
                                {advantages.map(({ imgPath, alt, title, subtitle }, index) => <Advantage imgPath={imgPath} alt={alt} title={title} subtitle={subtitle} key={index} />)}
                            </div>
                        </div>
                        <Button className={styles.button}>Стоимость программы</Button>
                    </div>

                    <div className={styles.images}>
                        <div className={styles.imgWrapper}>
                            <img src={photo1} alt='Фото озера из поездки' />
                        </div>
                        <div className={styles.imgWrapper}>
                            <img src={photo2} alt='Фото туриста в горах' />
                        </div>
                        <div className={styles.imgWrapper}>
                            <img src={photo3} alt='Фото туриста на снегоходе' />
                        </div>
                        <div className={styles.imgWrapper}>
                            <img src={photo4} alt='Фото гор из поездки' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}