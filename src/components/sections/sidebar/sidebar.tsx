import RoomLink from "./room-link";

export default function Sidebar({ users, ...props }: any) {
  const li = users.map((user: any) => <RoomLink user={user} key={user.id} />)

  return (
    <div>
      <ul>
        {li}
      </ul>
    </div>
  );
}
