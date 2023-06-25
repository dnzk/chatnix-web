export default function Room() {
  return (
    <main className="h-full min-h-screen flex">
      <div className="w-[426px] bg-purple-200">Sidebar</div>
      <div className="grow bg-green-100 p-4">
        <div className="h-full bg-white rounded-lg flex flex-col">
          <div>Room name</div>
          <div>Chat goes here</div>
          <div>Text box</div>
        </div>
      </div>
    </main>
  );
}
