import Unauthorized from "@/components/layouts/unauthorized"
import LinkButton from "@/components/buttons/link-button"

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
