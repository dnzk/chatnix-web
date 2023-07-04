import Link from "next/link";

export default function RoomLink({ room, isRoom = false, ...props }: any) {
  const href = isRoom ? `/room/${room.id}` : `/conversation/${room.id}`

  return (
    <Link href={href} className="text-white text-lg font-sans block">
      {room.name || room.username}
    </Link>
  );
}
