import { Icon } from '../Icon/Icon'
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = () => {
  return (
    <>
      <div className={styles.footer} id="contacts">
        <div className={cn(styles.wrapper, 'container')}>
          <div className={styles.about}>
            <div className={styles.description}>
              <h3 className={styles.title}>Компания «РумТибет»</h3>
              <p className={styles.text}>
                Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
                Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
              </p>
            </div>

            <div className={styles.links}>
              <div className={styles.contacts}>
                <a href="mailto:info@domain.com" className={styles.text}>
                  info@domain.com
                </a>
                <a href="tel:81234567890" className={styles.text}>
                  +7 (123) 456-78-90
                </a>
              </div>
              <div className={styles.socialMedias}>
                <a href="#">
                  <Icon variant="telegram" color="white" />
                </a>
                <a href="#">
                  <Icon variant="vk" color="white" />
                </a>
                <a href="#">
                  <Icon variant="pinterest" color="white" />
                </a>
                <a href="#">
                  <Icon variant="skype" color="white" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.sections}>
            <div>
              <h3 className={styles.title}>Наши услуги</h3>

              <ul className={styles.list}>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Прогулки в горы летом
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Зимние походы в горы
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Посещение храмов в горах
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Экстремальные виды туризма
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Походы в джунглях Амазонии
                  </a>
                  <div className={styles.new}>new</div>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Поездка в Африку
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={styles.title}>Важно для путешествий</h3>

              <ul className={styles.list}>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Как собрать в долгий поход?
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Жизненно важные предметы для похода
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Медицинская страховка, гарантии безопасности
                  </a>
                </li>
                <li>
                  <Icon variant="menuArrow" color="light" />
                  <a href="#" className={styles.text}>
                    Если вы врач - загляните сюда
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subfooter}>
        <div className={cn('container', styles.content)}>
          <p className={styles.text}>ИП Константинопольский К.К., 2023</p>
          <a href="#" className={styles.text}>
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </>
  )
}
