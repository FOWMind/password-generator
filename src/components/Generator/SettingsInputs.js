import { config } from "../../config"
import Range from "../Layout/Range"
import Checkbox from "../Layout/Checkbox"

export default function SettingsInputs() {
  return (
    <>
      <Range
        name="characterLength"
        min={0}
        max={20}
        steps={1}
        defaultValue={config?.rangeDefaultValue}
      />
      <Checkbox
        name="uppercaseLetters"
        defaultChecked
        label="Include Uppercase Letters"
      />
      <Checkbox
        name="lowercaseLetters"
        defaultChecked
        label="Include Lowercase Letters"
      />
      <Checkbox name="includeNumbers" defaultChecked label="Include Numbers" />
      <Checkbox name="includeSymbols" label="Include Symbols" />
    </>
  )
}
