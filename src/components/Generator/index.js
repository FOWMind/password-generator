import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"

import { Title } from "../Layout/Title"
import { Button } from "../Layout/Button"
import PasswordOutput from "./PasswordOutput"
import PasswordSettings from "./PasswordSettings"

export default function Generator() {
  return (
    <Container>
      <GeneratorTitle>Password Generator</GeneratorTitle>
      <PasswordOutput />
      <PasswordSettings />
      <GenerateButton>
        Generate
        <FiArrowRight />
      </GenerateButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 40ch;
`

const GeneratorTitle = styled(Title)`
  margin-bottom: 1rem;
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
