import axios from "axios";
import { serverUrl } from "../../helper/envVars";
import Cookies from "js-cookie";
import { cookieToken } from "../../helper/constants";

const accessToken = Cookies.get(cookieToken);

interface GET_ALL_REQ_PROPS {
  endPoint: string;
}

export const getAll = async (props: GET_ALL_REQ_PROPS) => {
  const { endPoint } = props;

  try {
    const res = await axios.get(`${serverUrl}${endPoint}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    });

    return res;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
