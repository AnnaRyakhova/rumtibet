import { Typography } from '../../components/UiKit/Typography/Typography'
import styles from './TourProgram.module.css'
import cn from 'classnames'

export const TourProgram = () => {
  return (
    <div className={cn(styles.root, 'container')}>
      <img src="/images/tourProgram/program.webp" className={styles.image} />
      <Typography variant="h1" color="brandColor" className={styles.title}>
        Программа тура
      </Typography>
      <Typography variant="mainText" className={styles.text}>
        Приготовьтесь к незабываемому путешествию в сердце Тибета! Наша программа тура предоставляет уникальную
        возможность окунуться в мир величественных гор, невероятной красоты природы и познакомиться с богатой культурой
        этого загадочного региона. Ваше путешествие начнется с незабываемого видового тура по горам Тибета.
        <br /> <br /> Вы будете потрясены величием Альпы Джомолунгмы и почувствуете проницательность земной глубины на
        вершинах Эвереста. Каждый поворот тропы раскрывает прекрасные пейзажи и вдохновляет на создание незабываемых
        фотографий.
        <br /> <br /> Ваш гид в этом увлекательном путешествии будет истинным экспертом по Тибету. Он поделится с вами
        историческими фактами, легендами и интересными анекдотами, погрузив вас в мирнушкуэ волшебства и древности этой
        удивительной страны. Вы сможете задавать ему любые вопросы и узнавать об уникальных требованиях тибетской
        культуры и обрядах. <br /> <br /> Проживание на время тура будет предоставлено в комфортабельных отелях и
        гостиницах, в идеально подобранных местах для настоящего погружения в местную атмосферу. Все ваши нужды будут
        заранее продуманы, чтобы вы могли наслаждаться каждой минутой отдыха и забыть о повседневных проблемах. Комнаты
        будут укомплектованы всем необходимым, а обслуживающий персонал примет заботу о вашем комфорте и уюте в течение
        всего пребывания. <br /> <br /> Туристы могут быть уверены, что все необходимые расходы уже включены в стоимость
        тура. Будет организован трансфер из аэропорта и обратно, питание, экскурсии, услуги гида и проживание. <br />{' '}
        <br /> Вам останется только наслаждаться безмятежным отдыхом, сфокусировать внимание на красоте окружающего мира
        и насытиться духовной энергией удивительного Тибета. Не упустите возможность познакомиться с этим удивительным
        регионом! Программа тура в Тибет гарантирует незабываемые впечатления, открытие новых миров и насыщенный
        культурный опыт.
      </Typography>
    </div>
  )
}