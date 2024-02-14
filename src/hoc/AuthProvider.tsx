import { ReactNode, createContext, useState } from 'react'

interface IAuth {
  userName: string
  signIn: (newUser: string, cb: () => void) => void
  signOut: (cb: () => void) => void
}

const defaultAuth = {
  userName: '',
  signIn: () => {},
  signOut: () => {},
}

export const AuthContext = createContext<IAuth>(defaultAuth)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUser] = useState('')
  const signIn = (newUser: string, navigate: () => void) => {
    setUser(newUser)
    navigate()
  }
  const signOut = (navigate: () => void) => {
    setUser('')
    navigate()
  }

  const value = { userName, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
