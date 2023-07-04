import axios from "axios";
import { serverUrl } from "../../helper/envVars";
import Cookies from "js-cookie";
import { cookieToken } from "../../helper/constants";

interface GET_ALL_REQ_PROPS {
  endPoint: string;
  id: number;
}
const accessToken = Cookies.get(cookieToken);

export const getByID = async (props: GET_ALL_REQ_PROPS) => {
  const { endPoint, id } = props;

  try {
    const res = await axios.get(`${serverUrl}${endPoint}/${id}`, {
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
