import React, { createContext, FunctionComponent, useState } from 'react'

import User from '../types/user.types'

interface children{
    children: React.ReactNode

}

interface UserContexProps{
    currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<UserContexProps>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: FunctionComponent<children> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState < User | null>(null)

  const isAuthenticated = currentUser !== null

  const logoutUser = () => {
    setCurrentUser(null)
  }

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  return (
        <UserContext.Provider value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
  )
}

export default UserContextProvider
