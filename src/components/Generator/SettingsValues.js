import { useContext } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

export default function SettingsValues({ children }) {
  const { settings, setSettings, handleSettings } = useContext(SettingsContext)

  /*
   * Pass values to children using Render Props pattern
   * See https://reactjs.org/docs/render-props.html
   */
  return (
    children &&
    children({
      settings,
      setSettings,
      handleSettings,
    })
  )
}
