import styles from './Header.module.css'
import { Button } from '../UiKit/Button/Button'

import { useState } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <Icon variant="logo" color="light" className={styles.logo} />

        <nav className={styles.nav}>
          <ul className={cn(styles.navItems, { [styles.open]: isOpen })}>
            <li className={styles.lii}>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Главная</a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Про гида</a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Программа тура</a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Стоимость</a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Блог</a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#">Контакты</a>
            </li>
          </ul>

          <Button size="normal" className={styles.button}>
            Консультация
          </Button>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuIcon}>
          {isOpen ? (
            <Icon variant="closeMenu" color="white" className={styles.closeIcon} />
          ) : (
            <Icon variant="burger" color="white" />
          )}
        </button>
      </div>
    </div>
  )
}
