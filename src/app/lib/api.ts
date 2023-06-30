import { accessToken } from "@/constants";
import Cookies from "js-cookie";

export async function post(route: string, params = {}) {
  const token = Cookies.get('accessToken')
  const headers: any = {
    'Content-type': 'application/json'
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`
  const result = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers,
    body: JSON.stringify(params)
  })
  return result
}

export async function get(route: string, params = {}) {
  const token = Cookies.get('accessToken')
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`
  if (Object.getOwnPropertyNames(params).length) {
    const queryParams = new URLSearchParams(params)
    url = `${url}?${queryParams}`
  }
  if (token) {
    return await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  return await fetch(url)
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

export async function getUsers() {
  const result = await get('/users')
  if (result.ok) {
    return result.json()
  } else {
    throw new Error('Error requesting users')
  }
}

type ObjectID = number;

export interface IMessage {
  content: string;
  id: ObjectID;
  sent_by: ObjectID;
  sent_datetime: string;
}

export interface IRoom {
  room: {
    name: string;
    id: ObjectID;
  };
  messages: IMessage[]
}

export async function initConversation(id: string) {
  const result = await post('/init_conversation', {
    id
  })
  if (result.ok) {
    return result.json()
  } else {
    throw new Error('Error init conversation')
  }
}
