export default function ModalBackdrop({ children, ...props }: any) {
  return <div className="fixed w-full h-full top-0 left-0 bg-neutral-dark-200 bg-opacity-30">
    {children}
  </div>
}
