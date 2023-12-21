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
}

export const Select: FC<Select> = ({ label, labelFor, options }) => {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={labelFor} className={styles.label}>
        <Typography variant="subtitle" color="lightColor">
          {label}
        </Typography>
      </label>
      <select id={labelFor}>
        {options.map(({ value, option }, index) => (
          <option value={value} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
