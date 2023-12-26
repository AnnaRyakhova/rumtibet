import styles from './Select.module.css'
import { FC } from 'react'
import { Typography } from '../../UiKit/Typography/Typography'

interface Options {
  value: string
  option: string
}
interface Select {
  label: string
  labelFor: string
  options: Options[]
  className?: string
  labelClass?: string
}

export const Select: FC<Select> = ({ label, labelFor, options, className, labelClass }) => {
  return (
    <div className={className}>
      <label htmlFor={labelFor} className={labelClass}>
        <Typography variant="subtitle" color="lightColor">
          {label}
        </Typography>
      </label>
      <select id={labelFor} className={styles.select}>
        {options.map(({ value, option }, index) => (
          <option value={value} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
