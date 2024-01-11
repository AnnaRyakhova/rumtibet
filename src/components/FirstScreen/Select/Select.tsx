import styles from './Select.module.css'
import { FC } from 'react'
import { Typography } from '../../UiKit/Typography/Typography'

export interface Option {
  value: string
  text: string
  disabled?: boolean
}

interface Select {
  value?: string | number | null
  label: string
  labelFor: string
  options: Option[]
  className?: string
  labelClass?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<Select> = ({ value, label, labelFor, options, className, labelClass, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={labelFor} className={labelClass}>
        <Typography variant="subtitle" color="lightColor">
          {label}
        </Typography>
      </label>
      <select value={value ?? ''} id={labelFor} className={styles.select} onChange={onChange} required>
        {options.map(({ value, text, disabled = false }, index) => {
          return (
            <option value={value} key={index} disabled={disabled}>
              {text}
            </option>
          )
        })}
      </select>
    </div>
  )
}
