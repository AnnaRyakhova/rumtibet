import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './hoc/AuthProvider'

type Validations = Record<string, string | boolean | number>

export const useValidation = (value: string | null | Date, validations: Validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState('')
  const [emailError, setEmailError] = useState(false)

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
        case 'minLength':
          if (typeof value === 'string' && typeof validations.minLength === 'number') {
            value.length >= validations.minLength ? setMinLengthError('') : setMinLengthError('Слишком короткий email')
          }

          break
        case 'isEmail':
          if (typeof value === 'string') {
            re.test(value.toLowerCase()) ? setEmailError(false) : setEmailError(true)
          }
      }
    }
  }, [value])

  return { isEmpty, minLengthError, emailError }
}

export const useAuth = () => {
  return useContext(AuthContext)
}
