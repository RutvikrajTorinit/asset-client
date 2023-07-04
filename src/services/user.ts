import { getByID } from "./axios/getByID";
import endPoints from "./endPoints";

export const getUserByID = async (id: number) => {
  try {
    const res = await getByID({ endPoint: endPoints.getUserByID, id: id });

    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
