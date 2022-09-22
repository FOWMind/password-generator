import { useState, useContext, useEffect } from "react"
import { passwordStrength } from "check-password-strength"

import { GeneratePassword } from "../utils/GeneratePassword"
import { SettingsContext } from "../contexts/SettingsContext"

export default function useGenerator() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState({})
  const { settings } = useContext(SettingsContext)

  const handlePassword = (done = () => {}) => {
    const generatedPassword = GeneratePassword(settings)
    if (!generatedPassword) return
    setPassword(generatedPassword)
    return done(generatedPassword)
  }

  const handlePasswordStrength = (password) => {
    const pwdStrength = passwordStrength(password)
    if (!pwdStrength) return
    return setStrength({ value: pwdStrength.value, id: pwdStrength.id })
  }

  const generatePasswordAndStrength = () => {
    handlePassword((generatedPassword) => {
      handlePasswordStrength(generatedPassword)
    })
  }

  useEffect(() => {
    // Generate password and strength on initial render
    if (!password) {
      generatePasswordAndStrength()
    }
  }, [password, settings, generatePasswordAndStrength])

  return { password, strength, generatePasswordAndStrength }
}
