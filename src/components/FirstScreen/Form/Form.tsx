import { useState } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { toast } from 'sonner'

import { useValidation } from '@/hooks'
import { Icon } from '@/components/Icon/Icon'
import { Typography } from '@/components/UiKit/Typography/Typography'
import { Button } from '@/components/UiKit/Button/Button'

import { FormState, INITIAL_FORM, LOCATIONS } from '../constants'
import { getDefaultMembersCount, getLabel, getLocation, getOptions, isRangeContainsMembers } from '../utils'
import { Select } from '../Select/Select'
import styles from './Form.module.css'

type Range = [Date, Date]

export const Form = ({ type }: { type: string }) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)

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

  const RULE_IS_EMPTY = { isEmpty: true }
  const { location, endDate, members } = form

  const locationValid = useValidation(location, RULE_IS_EMPTY)
  const dateValid = useValidation(endDate, RULE_IS_EMPTY)
  const membersValid = useValidation(members, RULE_IS_EMPTY)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const invalid = locationValid.isEmpty || dateValid.isEmpty || membersValid.isEmpty

    if (invalid) {
      toast.error('Пожалуйста, заполните все поля')
    } else {
      const startDate = moment(form.startDate).format('DD.MM.YYYY')
      const endDate = moment(form.endDate).format('DD.MM.YYYY')
      const location = getLocation(form.location)

      toast.success(`Выполняем поиск тура в ${location} с ${startDate} по ${endDate}`)
    }
  }

  return (
    <form className={styles[type]} onSubmit={handleSubmit} noValidate onClick={(e) => e.stopPropagation()}>
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
  )
}
