import Link from "next/link";

export default function RoomLink({ user, ...props }: any) {
  return (
    <Link href={`/room/${user.id}`} className="text-white text-lg font-sans block">
      {user.username}
    </Link>
  );
}
