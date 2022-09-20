import styled from "styled-components"
import { useState, useRef, useContext, useEffect } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

import { GrFormCheckmark } from "react-icons/gr"

export default function Checkbox({ label, ...props }) {
  const [checked, setChecked] = useState(false)
  const checkboxRef = useRef(null)
  const { handleSettings } = useContext(SettingsContext)

  useEffect(() => {
    // * dispatch a new click event to trigger handleChange
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
    checkboxRef.current.dispatchEvent(event)
  }, [checkboxRef])

  const handleChange = (e) => {
    setChecked(e.target.checked)
    handleSettings(e.target.name, e.target.checked)
  }

  return (
    <Container>
      <CheckboxLabel>
        <CheckboxLabelItem>
          {checked && (
            <CheckboxLabelItemIcon>
              <GrFormCheckmark />
            </CheckboxLabelItemIcon>
          )}
        </CheckboxLabelItem>
        <StyledCheckbox
          ref={checkboxRef}
          type="checkbox"
          {...props}
          value={checked}
          onChange={handleChange}
        />
        {label && <CheckboxText>{label}</CheckboxText>}
      </CheckboxLabel>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const CheckboxLabel = styled.label`
  display: inline-block;
  cursor: pointer;
`

const CheckboxLabelItem = styled.div`
  width: 1rem;
  height: 1rem;
  vertical-align: text-top;
  display: inline-block;
  background-color: #a8fdb0;
`

const CheckboxLabelItemIcon = styled.div`
  display: block;
  font-size: 1rem;
`

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
`

const CheckboxText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #e4e3e7;
  margin-left: 1rem;
`