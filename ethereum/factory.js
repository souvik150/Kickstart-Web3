import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x773fbA2157aF818E40e108078E1EdC39D170856e"
);

export default instance;
