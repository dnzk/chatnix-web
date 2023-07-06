import Link from "next/link";

export default function RoomLink({ room, isRoom = false, ...props }: any) {
  const href = isRoom ? `/room/${room.id}` : `/conversation/${room.id}`
  const hover = 'hover:bg-purple-100 hover:pl-1'
  const styles = `text-white text-lg font-sans ${hover}`

  return (
    <Link href={href} className={`${styles}`}>
      {room.name || room.username}
    </Link>
  );
}
