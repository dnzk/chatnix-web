import { useCurrentUser } from "@/app/lib/useCurrentUser";
import RoomLink from "./room-link";
import UserInfo from "./user-info";

export default function Sidebar({ users, rooms, ...props }: any) {
  const currentUser = useCurrentUser()
  const usersList = users.map((user: any) => {
    if (user.username === currentUser.username) {
      return <UserInfo key={user.id} user={user} />
    }
    return <RoomLink room={user} key={user.id} />
  })
  const roomsList = rooms.map((room: any) => <RoomLink room={room} key={room.id} isRoom />)

  return (
    <div>
      <ul className="flex flex-col">
        {usersList}
      </ul>
      <ul className="flex flex-col">
        {roomsList}
      </ul>
    </div>
  );
}
