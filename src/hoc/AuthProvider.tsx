import { ReactNode, createContext, useState } from 'react'

interface IAuth {
  user: string
  signIn: (newUser: string, cb: () => void) => void
  signOut: (cb: () => void) => void
}

const defaultAuth = {
  user: '',
  signIn: () => {},
  signOut: () => {},
}

export const AuthContext = createContext<IAuth>(defaultAuth)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('')
  const signIn = (newUser: string, navigate: () => void) => {
    setUser(newUser)
    navigate()
  }
  const signOut = (navigate: () => void) => {
    setUser('')
    navigate()
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
