import { FC } from 'react';
import styles from './advantages.module.css';

interface Advantage {
    imgPath: string;
    alt: string;
    title: string;
    subtitle: string;
    key: number;
}

interface Advantages {
    className: string;
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


export const Advantages: FC<Advantages> = ({ className }) => {
    return (
        <div className={className}>
            {advantages.map(({ imgPath, alt, title, subtitle }, index) => <Advantage imgPath={imgPath} alt={alt} title={title} subtitle={subtitle} key={index} />)}
        </div>
    )
}