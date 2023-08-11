import axios from "axios";

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
  mode?: string;
}

const postConfig: Params = {
  baseUrl: "https://shielded-depths-43687-bb049deacd16.herokuapp.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    Authorization: "",
    "Content-Type": "application/json",
  },
  method: "post",
};

const getConfig: Params = {
  baseUrl: "https://shielded-depths-43687-bb049deacd16.herokuapp.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    Authorization: "",
    "Content-Type": "application/json",
  },
  method: "get",
  mode: "no-cors",
};

export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getAPI = async (
  url: string,
  currency?: string,
  order?: string
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}`,
    params: { currency, order },
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};
