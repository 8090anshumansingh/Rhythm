import axios from "axios";

const instance = axios.create({
   baseURL: "http://localhost:8800",
  //  baseURL: "https://rhythm-back.herokuapp.com",
});

export default instance;
