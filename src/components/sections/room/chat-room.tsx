import MessageSequence from "./message-sequence"
import RoomName from "./room-name"

export default function ChatRoom() {
  const styles = "h-full bg-white rounded-lg flex flex-col p-6"

  return <div className={styles}>
    <RoomName />
    <MessageSequence />
  </div>
}
