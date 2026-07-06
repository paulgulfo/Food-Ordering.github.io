import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase/config"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Logout
  const logout = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)