'use client'

import { accessToken, landingRoute } from "@/constants";
import Button from "../buttons/button";
import Sidebar from "../sections/sidebar/sidebar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUsers } from "@/app/lib/api";

export default function Authorized({ children, ...props }: any) {
  const router = useRouter()
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
      .then(result => result?.data?.users)
      .then((u) => {
        setUsers(u)
      })
      .catch((e) => { })
  }, [])

  function logout() {
    Cookies.remove(accessToken)
    router.replace(landingRoute)
  }

  return (
    <main className="h-full min-h-screen flex">
      <div className="w-[426px] bg-purple-200 p-4 flex flex-col">
        <div className="flex-1">
          <Sidebar users={users} />
        </div>
        <Button onClick={logout}>Log Out</Button>
      </div>
      <div className="flex-1 bg-green-100 p-4">
        {children}
      </div>
    </main>
  );
}
