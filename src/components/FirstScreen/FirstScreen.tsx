import styles from './FirstScreen.module.css'
import { Header } from '../Header/Header'
import { Typography } from '../UiKit/Typography/Typography'
import { Button } from '../UiKit/Button/Button'
import cn from 'classnames'

export const FirstScreen = () => {
    return (
        <div className={styles.root}>
            <div className='container' style={{ height: '100%' }}>
                <div className={styles.wrapper}>
                    <Header />
                    <div className={styles.content}>
                        <Typography variant='h1' color='lightColor' className={styles.title}>Насладись прогулкой в горах
                            с командой единомышленников
                        </Typography>
                        <div className={styles.formWrapper}>
                            <form className={styles.form}>

                                <div className={styles.selectWrapper}>
                                    <label htmlFor='location' className={styles.label}>
                                        <Typography variant='subtitle' color='lightColor'>выберите из списка</Typography>
                                    </label>
                                    <select id="location" className={styles.select}>
                                        <option value="selectTitle">Локация для тура</option>
                                        <option value="Beijing">Пекин</option>
                                        <option value="Lhasa">Лхаса</option>
                                        <option value="Shanghai">Шанхай</option>
                                    </select>
                                </div>

                                <div className={styles.selectWrapper}>
                                    <label htmlFor='date' className={styles.label}>
                                        <Typography variant='subtitle' color='lightColor'>укажите диапазон</Typography>
                                    </label>
                                    <select id="date" className={styles.select}>
                                        <option value="selectTitle">Дата похода</option>
                                        <option value="Beijing">Пекин</option>
                                        <option value="Lhasa">Лхаса</option>
                                        <option value="Shanghai">Шанхай</option>
                                    </select>
                                </div>

                                <div className={styles.selectWrapper}>
                                    <label htmlFor='members' className={styles.label}>
                                        <Typography variant='subtitle' color='lightColor'>минимум 4 человека</Typography>
                                    </label>
                                    <select id="members" className={styles.select}>
                                        <option value="selectTitle">Участники</option>
                                        <option value="Beijing">Пекин</option>
                                        <option value="Lhasa">Лхаса</option>
                                        <option value="Shanghai">Шанхай</option>
                                    </select>
                                </div>

                                <Button color='light' className={styles.button}>Найти программу</Button>
                            </form>
                        </div>
                        <Button color='light' className={styles.mobButton}>Найти программу</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}