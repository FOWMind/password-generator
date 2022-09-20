import styled from "styled-components"

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
      <Button>Generate</Button>
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
