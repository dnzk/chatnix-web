'use client'

import { initGroupRoom } from "@/app/lib/api"
import Authorized, { SocketContext } from "@/components/layouts/authorized"
import ChatRoom from "@/components/sections/room/chat-room"
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function RoomIndex() {
  const { room } = useParams()
  const [roomData, setRoomData] = useState({} as any)
  const [messages, setMessages] = useState([] as any[])
  const socket = useContext(SocketContext)
  const [channel, setChannel] = useState({} as any)

  useEffect(() => {
    initGroupRoom(room)
      .then((result) => result?.data)
      .then((data) => {
        setRoomData(data?.room)
        setMessages(data?.room?.messages)
        setupChannel(data?.room?.id)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  function setupChannel(roomId: string) {
    const c = socket.channel(`room:${roomId}`, {})
    c.join()
      .receive('ok', (resp: any) => {
        console.log('ok')
        console.log(resp)
      })
      .receive('error', (resp: any) => {
        console.log('error')
        console.log(resp)
      })
    c.on('new_message', (payload: any) => {
      setMessages((currentMessages: any) => [...currentMessages, payload])
    })
    setChannel(c)
  }

  function handleMessageSend(message: string) {
    if (channel) {
      channel.push('new_message', { message })
    }
  }

  return <Authorized>
    <ChatRoom
      messages={messages}
      onSend={handleMessageSend}
      roomName={roomData.name}
    />
  </Authorized>
}
