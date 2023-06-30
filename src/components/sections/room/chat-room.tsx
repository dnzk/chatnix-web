import MessageTextarea from "@/components/inputs/message-textarea"
import MessageSequence from "./message-sequence"
import RoomName from "./room-name"

export default function ChatRoom({ messages, ...props }: any) {
  const styles = "h-full bg-white rounded-lg flex flex-col p-6"

  return <div className={styles}>
    <RoomName />
    <MessageSequence messages={messages} className="flex-1" />
    <MessageTextarea />
  </div>
}
