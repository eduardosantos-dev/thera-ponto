import axios from "axios";

const api = axios.create({
  baseURL: "http://theraponto.dev.thera.com.br:8088/api",
});

export default api;
