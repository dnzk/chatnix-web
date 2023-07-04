import { createPortal } from 'react-dom'
import ModalBody from './modal-body'
import ModalBackdrop from './modal-backdrop'

export default function Modal({ onClose, ...props }: any) {
  function handleClose() {
    onClose()
  }

  return createPortal(
    <ModalBackdrop>
      <ModalBody onClose={handleClose} />
    </ModalBackdrop>,
    document.getElementById('modal-root')!
  )
}
