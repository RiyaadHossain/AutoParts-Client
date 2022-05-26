import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://shielded-springs-18934.herokuapp.com/",
});

export default fetcher;