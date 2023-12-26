import styles from './FirstScreen.module.css'
import { Typography } from '../UiKit/Typography/Typography'
import { Button } from '../UiKit/Button/Button'
import { Select } from './Select/Select'
import cn from 'classnames'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Icon } from '../Icon/Icon'

const locations = [
  {
    value: 'selectTitle',
    option: 'Локация для тура',
  },
  {
    value: 'Beijing',
    option: 'Пекин',
  },
  {
    value: 'Lhasa',
    option: 'Лхаса',
  },
  {
    value: 'Shanghai',
    option: 'Шанхай',
  },
]

const members = [
  {
    value: 'selectTitle',
    option: 'Участники',
  },
  {
    value: 'Beijing',
    option: 'Пекин',
  },
  {
    value: 'Lhasa',
    option: 'Лхаса',
  },
  {
    value: 'Shanghai',
    option: 'Шанхай',
  },
]

type Range = [Date, Date]

export const FirstScreen = () => {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleChange = (range: Range): void => {
    console.log(range)
    const [startDate, endDate] = range
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.content}>
          <Typography variant="h1" color="lightColor" className={styles.title}>
            Насладись прогулкой в горах с командой единомышленников
          </Typography>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <Select
                label="выберите из списка"
                labelFor="location"
                options={locations}
                className={styles.input}
                labelClass={styles.label}
              />

              <div className={styles.datePicker}>
                <DatePicker
                  selected={startDate}
                  onChange={handleChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  className={styles.input}
                  placeholderText="Дата похода"
                  wrapperClassName={styles.datePickerWrapper}
                  dateFormat="dd/MM/yyyy"
                  closeOnScroll
                />
                <Icon variant="calendar" color="white" className={styles.calendarIcon} />
                <Typography variant="subtitle" color="lightColor" className={styles.label}>
                  укажите диапазон
                </Typography>
              </div>

              <Select
                label="минимум 4 человека"
                labelFor="members"
                options={members}
                className={styles.input}
                labelClass={styles.label}
              />

              <Button color="light" className={styles.button}>
                Найти программу
              </Button>
            </form>
          </div>
          <Button color="light" className={styles.mobButton}>
            Найти программу
          </Button>
        </div>
      </div>
    </div>
  )
}
