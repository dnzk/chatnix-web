import { IMessage } from "@/app/lib/api"
import Message from "@/components/message/message"

export default function MessageSequence({ messages = [], ...props }: any) {
  const styles = `flex flex-col justify-end ${props.className || ''}`

  const sequence = messages.map((message: IMessage) => <Message
    className="pb-1"
    key={message.id}
    content={message.content}
    time={message.sent_datetime}
    sender={message.sent_by}
  />)

  return <div className={styles}>
    {sequence}
  </div>
}
