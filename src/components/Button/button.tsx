const base = 'bg-neutral-dark-100 text-neutral-light-100 w-full p-4 rounded-md tracking-wider';
const hover = 'hover:drop-shadow-button hover:bg-neutral-dark-200';
const active = 'active:bg-neutral-dark-150';

export default function Button({ children: children, className: className }: any) {
  const buttonClassNames = `${base} ${hover} ${active} ${className || ''}`;

  return (
    <button className={buttonClassNames}>
      {children}
    </button>
  );
}
