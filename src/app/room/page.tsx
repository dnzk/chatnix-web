'use client'

import Button from "@/components/buttons/button";
import ChatRoom from "@/components/sections/room/chat-room";
import { accessToken, landingRoute } from "@/constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Room() {
  const router = useRouter()

  function logout() {
    Cookies.remove(accessToken)
    router.replace(landingRoute)
  }

  return (
    <main className="h-full min-h-screen flex">
      <div className="w-[426px] bg-purple-200">
        <Button onClick={logout}>Log Out</Button>
      </div>
      <div className="flex-1 bg-green-100 p-4">
        <ChatRoom />
      </div>
    </main>
  );
}
