import { standard } from './styles'

export default function Button({ children: children, className: className }: any) {
  const buttonClassNames = `${standard} ${className || ''}`

  return (
    <button className={buttonClassNames}>
      {children}
    </button>
  );
}
