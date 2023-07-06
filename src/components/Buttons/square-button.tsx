import { greenButton } from "./styles"

export type SquareButtonSize = 'small' | 'medium' | 'large'
greenButton

export default function SquareButton({ children, size = 'medium', ...props }: any) {
  function getDimension() {
    let pixelSize = 50
    if (size === 'small') {
      pixelSize = 25
    } else if (size === 'large') {
      pixelSize = 75
    }
    return `w-[${pixelSize}px] h-[${pixelSize}px]`
  }

  const dimension = getDimension()
  const styles = `${greenButton} ${dimension} ${props.className || ''}`

  return <button {...props} className={styles}>
    {children}
  </button>
}
