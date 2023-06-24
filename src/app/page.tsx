import Logo from "@/components/Logo/logo"
import Button from "@/components/Button/button"

export default function Home() {
  return (
    <main className="h-full min-h-screen bg-purple-100 grid grid-cols-8 gap-24 pt-[180px]">
      <div className="container mx-auto col-start-4 col-span-2 flex flex-col items-center relative">
        <Logo size="medium" className="mb-[48px]" />
        <Button className="mb-[48px]">Sign Up</Button>
        <Button>Log In</Button>
        <p className="text-neutral-light-100 font-sans text-sm absolute bottom-[24px]">Chat App powered by Elixir and Phoenix</p>
      </div>
    </main>
  )
}
