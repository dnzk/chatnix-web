'use client'
import Button from "@/components/buttons/button";
import TextInput from "@/components/inputs/text-input";
import Unauthorized from "@/components/layouts/unauthorized";
import { useState } from "react";
import { signUp } from "../lib/api";
import { useRouter } from "next/navigation";
import { landingRoute } from "@/constants";

export default function Login() {
  const inputSpacer = 'mb-8'
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function signUpHandler() {
    if (password && password === passwordConfirmation) {
      signUp({ email, username, password })
        .then(() => {
          router.push(landingRoute)
        })
        .catch((e) => {
          //
        })
    } else {
      // show error
    }
  }

  return (
    <Unauthorized>
      <form className="w-full">
        <TextInput placeholder="Email" type="email" name="email" className={inputSpacer} onChange={(e: any) => setEmail(e.target.value)} />
        <TextInput placeholder="Username" name="username" className={inputSpacer} onChange={(e: any) => setUsername(e.target.value)} />
        <TextInput placeholder="Password" type="password" name="password" className={inputSpacer} onChange={(e: any) => setPassword(e.target.value)} />
        <TextInput placeholder="Confirm password" type="password" name="confirm_password" className={inputSpacer} onChange={(e: any) => setPasswordConfirmation(e.target.value)} />
      </form>
      <Button onClick={signUpHandler}>
        Sign Up
      </Button>
    </Unauthorized>
  );
}
