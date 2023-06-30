export default function Timestamp({ time, ...props }: any) {
  const dateTime = new Date(time)
  const formatted = `${dateTime.getHours()}:${dateTime.getMinutes()}`

  return <div className="p-[4px] bg-blue-50">
    <p className="text-neutral-dark-350 text-[0.625rem]">{formatted}</p>
  </div>
}
