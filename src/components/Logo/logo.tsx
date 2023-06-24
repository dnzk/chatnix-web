import styles from './logo.module.css'

export interface ILogo {
  size: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Logo({ size: size, className: className }: ILogo) {

  const style = {
    fontSize: calculateFontSize(size)
  };

  function calculateFontSize(size: ILogo["size"]) {
    switch (size) {
      case 'small':
        return '32px';
      case 'medium':
        return '64px';
      case 'large':
        return '128px';
      default:
        return '64px';
    }
  }

  return (
    <p className={`font-display text-neutral-light-100 ${styles.logo} ${className ? className : ''}`} style={style}>Chatnix</p>
  );
}
