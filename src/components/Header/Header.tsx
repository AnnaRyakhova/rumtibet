import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { Button } from '@/components/UiKit/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Container } from '@/components/Container/Container'

import styles from './Header.module.css'

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
      <Container className={styles.wrapper}>
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
      </Container>
    </div>
  )
}
