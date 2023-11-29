import styles from './Header.module.css'
import { Button } from '../UiKit/Button/Button'
import { BurgerIcon, CloseIcon, LogoIcon, MenuArrowIcon } from '../UiKit/Icons/Icons'
import { useState } from 'react'
import cn from 'classnames'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.wrapper}>
            <LogoIcon className={styles.logo} />

            <nav className={styles.nav}>
                <ul className={cn(styles.navItems, { [styles.open]: isOpen })}>
                    <li className={styles.lii}>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Главная</a>
                    </li>
                    <li>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Про гида</a>
                    </li>
                    <li>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Программа тура</a>
                    </li>
                    <li>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Стоимость</a>
                    </li>
                    <li>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Блог</a>
                    </li>
                    <li>
                        <MenuArrowIcon className={styles.menuArrow} /><a href="#">Контакты</a>
                    </li>
                </ul>

                <Button size='normal' className={styles.button}>Консультация</Button>
            </nav>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuIcon}>
                {isOpen ? <CloseIcon className={styles.closeIcon} /> : <BurgerIcon />}
            </button>
        </div>
    )
}