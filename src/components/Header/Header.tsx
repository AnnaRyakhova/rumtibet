import styles from './Header.module.css'
import { Button } from '../UiKit/Button/Button'

import { useState } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavBg, setisNavBg] = useState(false)

  const height = window.screen.height

  const showBackground = () => {
    if (window.scrollY >= height - 50) {
      setisNavBg(true)
    } else {
      setisNavBg(false)
    }
  }

  window.addEventListener('scroll', showBackground)

  const сlassName = isNavBg ? styles.darkLink : styles.lightLink

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={cn(styles.root, { [styles.background]: isNavBg })}>
      <div className={cn('container', styles.wrapper)}>
        <Icon variant="logo" color={isNavBg ? 'brand' : 'white'} className={styles.logo} />

        <nav className={styles.nav}>
          <ul className={cn(styles.navItems, { [styles.open]: isOpen })}>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#" className={сlassName}>
                Главная
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#guide" className={сlassName}>
                Про гида
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#program" className={сlassName}>
                Программа тура
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#price" className={сlassName}>
                Стоимость
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#blog" className={сlassName}>
                Блог
              </a>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <a onClick={handleCloseMenu} href="#contacts" className={сlassName}>
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
            <Icon variant="burger" color={isNavBg ? 'brand' : 'white'} />
          )}
        </button>
      </div>
    </div>
  )
}
