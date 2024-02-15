import { FC, ReactNode } from 'react'
import cl from 'classnames'

import styles from './Typography.module.css'

type Variant = 'h1' | 'h2' | 'h3' | 'accentSubtitle' | 'mainText' | 'subtitle'
type Color = 'brandColor' | 'accentColor' | 'lightColor'

interface Typography {
  variant: Variant
  color?: Color
  children: ReactNode
  className?: string
}

export const Typography: FC<Typography> = ({ variant, color = 'mainColor', children, className }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={cl(styles.h1, styles[color], className)}>{children}</h1>

    case 'h2':
      return <h2 className={cl(styles.h2, styles[color], className)}>{children}</h2>

    case 'h3':
      return <h3 className={cl(styles.h3, styles[color], className)}>{children}</h3>

    case 'accentSubtitle':
      return <p className={cl(styles.accentSubtitle, styles[color], className)}>{children}</p>

    case 'mainText':
      return <p className={cl(styles.mainText, styles[color], className)}>{children}</p>
    case 'subtitle':
      return <p className={cl(styles.subtitle, styles[color], className)}>{children}</p>
  }
}
