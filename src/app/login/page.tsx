'use client'

import Button from "@/components/buttons/button";
import TextInput from "@/components/inputs/text-input";
import Unauthorized from "@/components/layouts/unauthorized";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "../lib/api";
import { roomRoute } from "@/constants";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function login() {
    signIn({ email, password })
      .then(() => {
        router.push(roomRoute)
      })
      .catch((e) => {
        //
      })
  }

  return (
    <Unauthorized>
      <form className="w-full">
        <TextInput placeholder="Email" type="email" name="email" className="mb-8" onChange={(e: any) => setEmail(e.target.value)} />
        <TextInput placeholder="Password" type="password" name="password" className="mb-8" onChange={(e: any) => setPassword(e.target.value)} />
      </form>
      <Button onClick={login}>
        Log In
      </Button>
    </Unauthorized>
  );
}
