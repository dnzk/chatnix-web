'use client'

import { accessToken, landingRoute } from "@/constants";
import Sidebar from "../sections/sidebar/sidebar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUsers, getRooms } from "@/app/lib/api";
import { createContext } from "react";
import { Socket } from 'phoenix-channels'
import SquareButton from "../buttons/square-button";
import AddIcon from '@mui/icons-material/Add'
import Modal from "../modals/modal";

const socket = new Socket('ws://localhost:4000/socket', {
  params: {
    accessToken: Cookies.get(accessToken)
  }
})
socket.connect()
export const SocketContext = createContext(socket)

export default function Authorized({ children, ...props }: any) {
  const router = useRouter()
  const [users, setUsers] = useState([])
  const [rooms, setRooms] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getUsers()
      .then(result => result?.data?.users)
      .then((u) => {
        setUsers(u)
      })
      .catch((e) => { })

    getRooms()
      .then(result => result?.data?.rooms)
      .then((r) => {
        setRooms(r)
      })
      .catch((e) => { })
  }, [])

  function logout() {
    Cookies.remove(accessToken)
    router.replace(landingRoute)
  }

  function createRoom() {
    setShowModal(true)
  }

  return (
    <SocketContext.Provider value={socket}>
      <main className="h-full min-h-screen flex">
        <div className="w-[426px] bg-purple-200 p-4 flex flex-col">
          <div className="flex-1">
            <button onClick={logout}>Log Out</button>
            <Sidebar users={users} rooms={rooms} />
          </div>
          <SquareButton onClick={createRoom}>
            <AddIcon className="fill-neutral-light-150" />
          </SquareButton>
        </div>
        <div className="flex-1 bg-green-100 p-4">
          {children}
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
      </main>
    </SocketContext.Provider>
  );
}
