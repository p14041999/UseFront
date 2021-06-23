import { env } from "./enviorinment";
import axios from "axios";

const baseurl = `${env.HOST}/airdrop`;

export const submitData = (airdropData) =>
  axios.post(`${baseurl}/participate`, airdropData);

export const getData = () => {
  axios.get(`${baseurl}/check`);
};
