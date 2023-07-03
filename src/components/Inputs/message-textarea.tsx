import { useState } from "react"

export default function MessageTextarea({ onSend, ...props }: any) {
  const [message, setMessage] = useState('')

  function sendMessage() {
    if (message) {
      onSend(message)
      setMessage(() => '')
    }
  }

  return <div>
    <textarea
      placeholder="Type your message here"
      onChange={(e: any) => setMessage(e.target.value)}
      value={message}>
    </textarea>
    <button onClick={sendMessage}>send</button>
  </div>
}
