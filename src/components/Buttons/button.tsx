import { standard } from './styles'

export default function Button({ children: children, ...p }: any) {
  const buttonClassNames = `${standard} ${p?.className || ''}`

  return (
    <button className={buttonClassNames} {...p}>
      {children}
    </button>
  );
}
