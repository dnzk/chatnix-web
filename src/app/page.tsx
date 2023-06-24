import Unauthorized from "@/components/Layouts/unauthorized"
import LinkButton from "@/components/Buttons/link-button"

export default function Home() {
  return (
    <Unauthorized>
      <LinkButton href="/signup" className="mb-[48px]">
        Sign Up
      </LinkButton>
      <LinkButton href="/login">
        Log In
      </LinkButton>
    </Unauthorized>
  )
}
