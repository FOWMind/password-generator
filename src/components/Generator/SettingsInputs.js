import { config } from "../../config"
import styled from "styled-components"
import Range from "../Layout/Range"
import Checkbox from "../Layout/Checkbox"

export default function SettingsInputs() {
  return (
    <>
      <Range
        name="characterLength"
        min={2}
        max={20}
        steps={1}
        defaultValue={config?.rangeDefaultValue}
      />
      <Checkboxes>
        <Checkbox
          name="includeUppercase"
          defaultChecked
          label="Include Uppercase Letters"
        />
        <Checkbox
          name="includeLowercase"
          defaultChecked
          label="Include Lowercase Letters"
        />
        <Checkbox
          name="includeNumbers"
          defaultChecked
          label="Include Numbers"
        />
        <Checkbox name="includeSymbols" label="Include Symbols" />
      </Checkboxes>
    </>
  )
}

const Checkboxes = styled.div`
  margin-top: 1rem;
`
