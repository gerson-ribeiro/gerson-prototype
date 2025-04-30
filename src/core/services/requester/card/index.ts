import axios from "axios";

const cardService = function () {
  const get = async (filters?:any) => await axios({
    method: "GET",
    url: `https://api.magicthegathering.io/v1/${filters}`,
  });

  return {
    get,
  }
};
export default cardService;
