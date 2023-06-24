import { standard } from "./styles"
export default function TextInput({ name, placeholder, type, ...props }: any) {
  const inputType = type || 'text'
  const inputStyles = `${standard} ${props.className || ''}`

  return (
    <input
      type={inputType}
      name={name}
      placeholder={placeholder}
      className={inputStyles}
    />
  );
}
