import { FC } from 'react';
import styles from './Typography.module.css'
import cl from 'classnames'

type Variant = 'h1' | 'h2' | 'h3' | 'accentSubtitle' | 'mainText' | 'subtitle'
type Color = 'brandColor' | 'accentColor' | 'lightColor'

interface Typography {
    variant: Variant;
    color?: Color;
    children: string;
}

export const Typography: FC<Typography> = ({ variant, color = 'mainColor', children }) => {

    switch (variant) {
        case 'h1':
            return (
                <h1 className={cl(styles.h1, styles[color])}>{children}</h1>
            )

        case 'h2':
            return (
                <h2 className={cl(styles.h2, styles[color])}>{children}</h2>
            )

        case 'h3':
            return (
                <h3 className={cl(styles.h3, styles[color])}>{children}</h3>
            )

        case 'accentSubtitle':
            return (
                <p className={cl(styles.accentSubtitle, styles[color])}>{children}</p>
            )

        case 'mainText':
            return (
                <p className={cl(styles.mainText, styles[color])}>{children}</p>
            )
        case 'subtitle':
            return (
                <p className={cl(styles.subtitle, styles[color])}>{children}</p>
            )
    }
}