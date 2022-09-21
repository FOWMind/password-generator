import styled from "styled-components"
import { useState, useContext, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import { SettingsContext } from "../../contexts/SettingsContext"
import { GeneratePassword } from "../../utils/GeneratePassword"

import { Title } from "../Layout/Title"
import { Button } from "../Layout/Button"
import PasswordOutput from "./PasswordOutput"
import PasswordSettings from "./PasswordSettings"

export default function Generator() {
  const [password, setPassword] = useState("")
  const { settings } = useContext(SettingsContext)

  const handleClick = () => {
    const generatedPassword = GeneratePassword(settings)
    if (!generatedPassword) return
    return setPassword(generatedPassword)
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
      <PasswordSettings />
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
