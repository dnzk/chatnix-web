export default function RoomName({ name, ...props }: any) {
  const bodyStyle = "border-b border-purple-250 pb-[10px]"
  const textStyle = "text-purple-250 text-lg"

  return (
    <div className={bodyStyle}>
      <p className={textStyle}>{name}</p>
    </div>
  );
}
