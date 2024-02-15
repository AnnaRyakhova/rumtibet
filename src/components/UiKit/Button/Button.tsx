import cl from 'classnames'
import { FC } from 'react'

import styles from './Button.module.css'

type Size = 'normal' | 'big'
type Color = 'dark' | 'light'

interface Button {
  size?: Size
  color?: Color
  children: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export const Button: FC<Button> = ({ size = 'big', color = 'dark', children, className, onClick }) => {
  return (
    <button onClick={onClick} className={cl(styles.button, styles[size], styles[color], className)}>
      {children}
    </button>
  )
}
