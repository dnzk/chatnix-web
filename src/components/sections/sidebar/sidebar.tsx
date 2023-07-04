import RoomLink from "./room-link";

export default function Sidebar({ users, rooms, ...props }: any) {
  const usersList = users.map((user: any) => <RoomLink room={user} key={user.id} />)
  const roomsList = rooms.map((room: any) => <RoomLink room={room} key={room.id} isRoom />)

  return (
    <div>
      <ul>
        {usersList}
      </ul>
      <ul>
        {roomsList}
      </ul>
    </div>
  );
}
