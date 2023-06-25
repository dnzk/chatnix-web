import ChatRoom from "@/components/sections/room/chat-room";

export default function Room() {
  return (
    <main className="h-full min-h-screen flex">
      <div className="w-[426px] bg-purple-200">Sidebar</div>
      <div className="grow bg-green-100 p-4">
        <ChatRoom />
      </div>
    </main>
  );
}
