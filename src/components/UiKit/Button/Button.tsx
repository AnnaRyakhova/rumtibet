import { FC } from 'react';
import styles from './button.module.css';
import cl from 'classnames';

type Size = 'normal' | 'big'
type Color = 'dark' | 'light'

interface Button {
    size?: Size;
    color?: Color;
    children: string;
    className?: string;
}

export const Button: FC<Button> = ({ size = 'big', color = 'dark', children, className }) => {
    return (
        <button className={cl(styles.button, styles[size], styles[color], className)}>{children}</button>
    )
}
