'use client'

import { initConversation } from "@/app/lib/api"
import Authorized from "@/components/layouts/authorized"
import ChatRoom from "@/components/sections/room/chat-room"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function RoomIndex() {
  const { room } = useParams()
  const [roomData, setRoomData] = useState({})
  const [messages, setMessages] = useState([])

  useEffect(() => {
    initConversation(room)
      .then((result) => result?.data)
      .then((data) => {
        setRoomData(data?.room)
        setMessages(data?.room?.messages)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return <Authorized>
    <ChatRoom messages={messages} />
  </Authorized>
}
