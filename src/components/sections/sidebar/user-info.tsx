import { greenButton } from "@/components/buttons/styles"
import { accessToken, landingRoute } from "@/constants"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

export default function UserInfo({ user, ...props }: any) {
  const router = useRouter()

  function logOut() {
    Cookies.remove(accessToken)
    router.replace(landingRoute)
  }

  return <div className="flex justify-between">
    <p className="text-white text-lg font-sans">{user.username}</p>
    <button onClick={logOut} className={`${greenButton} p-1 text-sm`}>Log out</button>
  </div>
}
