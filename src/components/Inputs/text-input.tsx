import { standard } from "./styles"

export default function TextInput({ name, placeholder, type, ...props }: any) {
  const inputType = type || 'text'
  const inputStyles = `${standard} ${props.className || ''}`
  const ppp = {
    ...props,
    type: inputType,
    name: name,
    placeholder,
    className: inputStyles
  }

  return (
    <input {...ppp} />
  );
}
