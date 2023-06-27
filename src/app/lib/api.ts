import { accessToken } from "@/constants";
import Cookies from "js-cookie";

export async function post(route: string, params = {}) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`
  const result = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return result
}

export interface ISignInParams {
  email: string;
  password: string;
}

export async function signIn(params: ISignInParams) {
  const result = await post('/sign_in', params)
  if (result.ok) {
    const r = await result.json()
    Cookies.set(accessToken, r.data.access_token)
    return
  } else {
    throw new Error('Invalid credentials')
  }
}

export interface ISignUpParams {
  username: string;
  email: string;
  password: string;
}

export async function signUp(params: ISignUpParams) {
  const result = await post('/sign_up', params)
  if (result.ok) {
    return
  } else {
    throw new Error('Invalid params')
  }
}
