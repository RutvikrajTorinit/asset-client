import Cookies from "js-cookie";

export const cookieToken = "accessToken";
export const cookieUser = "user";

export const loggedUser = JSON.parse(Cookies.get(cookieToken) || "");
