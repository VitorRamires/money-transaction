import axios from "axios";
export const api = axios.create({
  baseURL: 'https://moneytransaction-vitor.netlify.app/',
})