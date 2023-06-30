import MessageSender from "./message-sender"
import Timestamp from "./timestamp"

export default function Message({ content, time, sender, ...props }: any) {
  const containerStyle = `flex items-start gap-2.5 ${props.className || ''}`
  return <div className={containerStyle}>
    <div className="flex">
      <MessageSender sender={sender} />
      <Timestamp time={time} />
    </div>
    <p className="flex-1">
      {content}
    </p>
  </div>
}
