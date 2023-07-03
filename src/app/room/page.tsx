'use client'

import ChatRoom from "@/components/sections/room/chat-room";
import Authorized from "@/components/layouts/authorized";

export default function Room({ Component }: any) {
  return <Authorized>
    <ChatRoom />
  </Authorized >
}
