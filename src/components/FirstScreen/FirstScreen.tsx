import styles from './FirstScreen.module.css'
import { Typography } from '../UiKit/Typography/Typography'
import { Button } from '../UiKit/Button/Button'
import { Select } from './Select/Select'
import cn from 'classnames'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Icon } from '../Icon/Icon'
import { Form, INITIAL_FORM, LOCATIONS } from './constants'
import { getOptions, getLabel, isRangeContainsMembers, getDefaultMembersCount, getLocation } from './utils'
import { useValidation } from '../../hooks'
import { toast } from 'sonner'
import moment from 'moment'

export type Range = [Date, Date]

export const FirstScreen = () => {
  const [form, setForm] = useState<Form>(INITIAL_FORM)

  const handleRange = (range: Range): void => {
    const [startDate, endDate] = range
    setForm((oldForm) => ({ ...oldForm, startDate: startDate, endDate: endDate }))
  }

  const handleLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = e.target.value

    if (isRangeContainsMembers(form.members, location)) {
      setForm((oldForm) => ({ ...oldForm, location: location }))
    } else {
      setForm((oldForm) => ({ ...oldForm, location: location, members: '' }))
    }

    const defaultMembers = getDefaultMembersCount(location)

    if (defaultMembers) {
      setForm((oldForm) => ({ ...oldForm, location: location, members: defaultMembers }))
    }
  }

  const handleMembers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((oldForm) => ({ ...oldForm, members: e.target.value }))
  }

  const locationValid = useValidation(form.location, { isEmpty: true })
  const dateValid = useValidation(form.endDate, { isEmpty: true })
  const membersValid = useValidation(form.members, { isEmpty: true })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (locationValid.isEmpty || dateValid.isEmpty || membersValid.isEmpty) {
      toast.error('Пожалуйста, заполните все поля')
    } else {
      const startDate = moment(form.startDate).format('DD.MM.YYYY')
      const endDate = moment(form.endDate).format('DD.MM.YYYY')
      const location = getLocation(form.location)

      toast.success(`Выполняем поиск тура в ${location} с ${startDate} по ${endDate}`)
    }
  }

  return (
    <div className={styles.root}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.content}>
          <Typography variant="h1" color="lightColor" className={styles.title}>
            Насладись прогулкой в горах с командой единомышленников
          </Typography>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Select
              value={form.location}
              label="выберите из списка"
              labelFor="location"
              options={LOCATIONS}
              className={styles.input}
              labelClass={styles.label}
              onChange={handleLocation}
            />

            <div className={styles.datePicker}>
              <DatePicker
                selected={form.startDate}
                onChange={handleRange}
                startDate={form.startDate}
                endDate={form.endDate}
                selectsRange
                className={styles.input}
                placeholderText="Дата похода"
                wrapperClassName={styles.datePickerWrapper}
                dateFormat="dd.MM.yyyy"
                closeOnScroll
              />
              <Icon variant="calendar" color="white" className={styles.calendarIcon} />
              <Typography variant="subtitle" color="lightColor" className={styles.label}>
                укажите диапазон
              </Typography>
            </div>

            <Select
              value={form.members}
              label={getLabel(form.location)}
              onChange={handleMembers}
              labelFor="members"
              options={getOptions(form.location)}
              className={styles.input}
              labelClass={styles.label}
            />

            <Button color="light" className={styles.button}>
              Найти программу
            </Button>
          </form>

          <Button color="light" className={styles.mobButton}>
            Найти программу
          </Button>
        </div>
      </div>
    </div>
  )
}
