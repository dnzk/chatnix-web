import { accessToken } from "@/constants";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function parseJwt(token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null as any)

  useEffect(() => {
    const t = Cookies.get(accessToken);
    if (t) {
      const { username, email, sub: id } = parseJwt(t)
      setCurrentUser({ username, email, id })
    }
  }, []);

  return currentUser;
};
