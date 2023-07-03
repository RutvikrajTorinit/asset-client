import Cookies from "js-cookie";

import { cookieToken, cookieUser } from "../helper/constants";
import { postReq } from "./axios/post";
import endPoints from "./endPoints";

interface LOGIN_PAYLOAD {
  email: string;
  password: string;
}

export const login = async (payload: LOGIN_PAYLOAD) => {
  const res = await postReq({ endPoint: endPoints.login, body: payload });

  Cookies.set(cookieToken, JSON.stringify(res.data.data), { path: "/" });
  Cookies.set(cookieUser, res.data.accessToken, { path: "/" });

  return res.data;
};
