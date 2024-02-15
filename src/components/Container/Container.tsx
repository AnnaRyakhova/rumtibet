import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './Container.module.css'

interface ContainerProps {
  className?: string
  children: ReactNode
  id?: string
}

export const Container: FC<ContainerProps> = ({ className, id, children }) => {
  return (
    <div className={cn(styles.container, className)} id={id}>
      {children}
    </div>
  )
}
