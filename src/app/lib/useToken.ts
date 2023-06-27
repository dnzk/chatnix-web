import { accessToken } from "@/constants";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const t = Cookies.get(accessToken);
    if (t) {
      setToken(t);
    }
  }, []);

  return token;
};
