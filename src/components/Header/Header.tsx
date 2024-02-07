import styles from './Header.module.css'
import { Button } from '../UiKit/Button/Button'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0)

  const { pathname } = useLocation()

  const isNavBackground = pathname !== '/' || scroll >= window.innerHeight - 50

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const className = isNavBackground ? styles.darkLink : styles.lightLink
  const color = isNavBackground ? 'brand' : 'white'

  return (
    <div className={cn(styles.root, { [styles.background]: isNavBackground })}>
      <div className={cn('container', styles.wrapper)}>
        <Icon variant="logo" color={color} className={styles.logo} />

        <nav className={styles.nav}>
          <ul className={cn(styles.navItems, { [styles.open]: isOpen })}>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to="/" className={className}>
                Главная
              </Link>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to="/#guide" className={className}>
                Про гида
              </Link>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to="program" className={className}>
                Программа тура
              </Link>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to="/#price" className={className}>
                Стоимость
              </Link>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to="/#blog" className={className}>
                Блог
              </Link>
            </li>
            <li>
              <Icon variant="menuArrow" color="light" className={styles.menuArrow} />
              <Link onClick={handleCloseMenu} to={`${pathname}#contacts`} className={className}>
                Контакты
              </Link>
            </li>
          </ul>

          <Link to="error">
            <Button size="normal" className={styles.button}>
              Консультация
            </Button>
          </Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuIcon}>
          {isOpen ? (
            <Icon variant="closeMenu" color="white" className={styles.closeIcon} />
          ) : (
            <Icon variant="burger" color={color} />
          )}
        </button>
      </div>
    </div>
  )
}
