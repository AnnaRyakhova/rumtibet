import { FC } from 'react';
import styles from './button.module.css';
import cl from 'classnames';

type Size = 'normal' | 'big'

interface Button {
    size?: Size;
    children: string;
    className?: string;
}

export const Button: FC<Button> = ({ size = 'big', children, className }) => {
    return (
        <button className={cl(styles.button, styles[size], className)}>{children}</button>
    )
}
