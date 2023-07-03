import axios from "axios";
import Cookies from "js-cookie";
import { serverUrl } from "../../helper/envVars";
import { cookieToken } from "../../helper/constants";

interface POST_REQ_PROPS {
  endPoint: string;
  body: object;
}

const accessToken = Cookies.get(cookieToken);

export const postReq = async (props: POST_REQ_PROPS) => {
  const { body, endPoint } = props;
  try {
    const res = await axios.post(`${serverUrl}${endPoint}`, body, {
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
