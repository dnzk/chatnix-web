import { standard } from './styles'

export default function Button({ children, ...p }: any) {
  const buttonClassNames = `${standard} ${p?.className || ''}`

  return (
    <button {...p} className={buttonClassNames}>
      {children}
    </button>
  );
}
