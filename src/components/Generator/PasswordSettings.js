import styled from "styled-components"

import SettingsValues from "./SettingsValues"
import Settings from "./Settings"

import CharacterLength from "./CharacterLength"
import SettingsInputs from "./SettingsInputs"

export default function PasswordSettings() {
  return (
    <Container>
      <SettingsValues>
        {({ settings }) => (
          <>
            {settings.characterLength && (
              <CharacterLength length={settings.characterLength} />
            )}
            <Settings handleValues={(values) => console.log(values)}>
              <SettingsInputs />
            </Settings>
          </>
        )}
      </SettingsValues>
    </Container>
  )
}

const Container = styled.div`
  background-color: #24232b;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
`
