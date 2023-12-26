import styles from './Header.module.css'
import { Button } from '../UiKit/Button/Button'

import { useState } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBg, setNavBg] = useState(false)

  const height = window.screen.height

  const showBackground = () => {
    if (window.scrollY >= height - 50) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', showBackground)

  return (
    <div className={cn(styles.root, { [styles.background]: navBg })}>
      <div className={cn('container', styles.wrapper)}>
        <Icon variant="logo" color={navBg ? 'brand' : 'white'} className={styles.logo} />

        <nav className={styles.nav}>
          <ul className={cn(styles.navItems, { [styles.open]: isOpen })}>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#" className={navBg ? styles.darkLink : styles.lightLink}>
                Главная
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#guide" className={navBg ? styles.darkLink : styles.lightLink}>
                Про гида
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#program" className={navBg ? styles.darkLink : styles.lightLink}>
                Программа тура
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#price" className={navBg ? styles.darkLink : styles.lightLink}>
                Стоимость
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#blog" className={navBg ? styles.darkLink : styles.lightLink}>
                Блог
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a href="#contacts" className={navBg ? styles.darkLink : styles.lightLink}>
                Контакты
              </a>
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
            <Icon variant="burger" color={navBg ? 'brand' : 'white'} />
          )}
        </button>
      </div>
    </div>
  )
}
