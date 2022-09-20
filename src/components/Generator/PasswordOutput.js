import styled from "styled-components"

import { Button } from "../Layout/Button"

export default function PasswordOutput() {
  return (
    <Container>
      <Output>PTx1f5DaFX</Output>
      {/* <Button>Icon</Button> */}
    </Container>
  )
}

const Container = styled.div`
  background-color: #24232b;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Output = styled.p`
  font-size: 1.5rem;
  color: #fff;
`
