import Requester from "jade-request/src/requester";

const cardService = Requester({
  url: "https://api.magicthegathering.io/v1/",
}).doRequest;

export default cardService;
