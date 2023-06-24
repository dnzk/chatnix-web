import Logo from "../Logo/logo";

export default function Unauthorized({ children }: any) {
  const bg = 'bg-purple-100';

  const styleClasses = {
    main: `h-full min-h-screen grid grid-cols-8 gap-24 pt-[180px] ${bg}`,
    container: 'container mx-auto col-start-4 col-span-2 flex flex-col items-center relative'
  };

  return (
    <main className={styleClasses.main}>
      <div className={styleClasses.container}>
        <Logo size="medium" className="mb-[48px]" />
        {children}
        <p className="text-neutral-light-100 font-sans text-sm absolute bottom-[24px]">Chat App powered by Elixir and Phoenix</p>
      </div>
    </main>
  );
}
