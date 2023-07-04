import { createNewRoom } from "@/app/lib/api";
import Button from "../buttons/button";
import SquareButton from "../buttons/square-button";
import TextInput from "../inputs/text-input";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { roomRoute } from "@/constants";

export default function ModalBody({ onClose, ...props }: any) {
  const [roomName, setRoomName] = useState('')
  const router = useRouter()

  function createRoom() {
    if (roomName) {
      createNewRoom(roomName, [{ id: 1 }])
        .then((result) => result?.data)
        .then((data) => {
          if (data.room.id) {
            onClose()
            router.push(`${roomRoute}/${data.room.id}`)
          } else {
            throw new Error('Missing room id')
          }
        })
        .catch(e => console.log(e))
        .finally(() => {
          onClose()
        })
    }
  }

  return <div className="absolute top-[30%] left-[50%] translate-x-[-50%] bg-white rounded p-4 flex flex-col items-end">
    <SquareButton onClick={onClose} size="small" className="mb-4">
      <CloseIcon className="fill-neutral-light-150" />
    </SquareButton>
    <TextInput placeholder="Your new room's name" className="mb-4 w-[600px]" onChange={(e: any) => setRoomName(e.target.value)} />
    <TextInput placeholder="Your new room's participants" className="mb-4 w-[600px]" />
    <Button onClick={createRoom} className="w-[300px]">Create new room</Button>
  </div>
}
