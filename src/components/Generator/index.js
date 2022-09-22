import styled from "styled-components"
import { useState, useContext, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import { SettingsContext } from "../../contexts/SettingsContext"
import { GeneratePassword } from "../../utils/GeneratePassword"
import { passwordStrength } from "check-password-strength"

import { Title } from "../Layout/Title"
import { Button } from "../Layout/Button"
import PasswordOutput from "./PasswordOutput"
import PasswordSettings from "./PasswordSettings"
import PasswordStrength from "./PasswordStrength"

export default function Generator() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState({})
  const { settings } = useContext(SettingsContext)

  const handlePassword = () => {
    const generatedPassword = GeneratePassword(settings)
    if (!generatedPassword) return
    setPassword(generatedPassword)
  }

  const handlePasswordStrength = () => {
    const pwdStrength = passwordStrength(password)
    if (!pwdStrength) return
    return setStrength({ value: pwdStrength.value, id: pwdStrength.id })
  }

  const handleClick = () => {
    handlePasswordStrength()
    handlePassword()
  }

  useEffect(() => {
    // Generate password on initial render
    if (!password) {
      setPassword(GeneratePassword(settings))
    }
  }, [password, settings])

  return (
    <Container>
      <GeneratorTitle>Password Generator</GeneratorTitle>
      <PasswordOutput password={password} />
      <GeneratorBox>
        <PasswordSettings />
        <PasswordStrength strength={strength} />
      </GeneratorBox>
      <GenerateButton type="button" onClick={handleClick}>
        Generate
        <FiArrowRight />
      </GenerateButton>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  max-width: 45ch;
`

const GeneratorTitle = styled(Title)`
  margin-bottom: 1rem;
  text-align: center;
`

const GeneratorBox = styled.div`
  background-color: #24232b;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
`

const GenerateButton = styled(Button)`
  & > svg {
    transition: transform 0.15s;
  }

  &:hover {
    & > svg {
      transform: translateX(0.5rem);
    }
  }
`
