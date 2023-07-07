import { getAll } from "./axios/getAll";
import endPoints from "./endPoints";

export const getAllAssets = async () => {
  try {
    const res = await getAll({ endPoint: endPoints.getAllAssets });

    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
