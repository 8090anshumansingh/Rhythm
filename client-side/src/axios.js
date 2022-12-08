import axios from "axios";

const instance = axios.create({
   baseURL: "https://web-production-ef01.up.railway.app",
  //  baseURL: "https://rhythm-back.herokuapp.com/",
  // baseURL: "http://localhost:8800",
});

export default instance;
