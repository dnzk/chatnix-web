export type SquareButtonSize = 'small' | 'medium' | 'large'

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

  const background = 'bg-green-200'
  const hover = 'hover:drop-shadow-squareButton'
  const active = 'active:bg-neutral-dark-150 active:drop-shadow-button'
  const dimension = getDimension()
  const styles = `rounded ${hover} ${active} ${dimension} ${background} ${props.className || ''}`

  return <button {...props} className={styles}>
    {children}
  </button>
}
