import { ReactElement } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

export const RequireAuth = ({ children }: { children: ReactElement }) => {
  const location = useLocation()
  const { userName } = useAuth()

  if (!userName) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
