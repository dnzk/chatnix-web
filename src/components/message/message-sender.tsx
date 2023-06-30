export default function MessageSender({ sender, ...props }: any) {
  return <div className="w-40 text-end pr-2">
    <p className="text-blue-100">{sender.username}</p>
  </div>
}
